import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { DownloadHistoryController } from "../downloadHistory.controller";
import { DownloadHistoryService } from "../downloadHistory.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  downloadedAt: new Date(),
  id: "exampleId",
  quality: "exampleQuality",
  updatedAt: new Date(),
  videoUrl: "exampleVideoUrl",
};
const CREATE_RESULT = {
  createdAt: new Date(),
  downloadedAt: new Date(),
  id: "exampleId",
  quality: "exampleQuality",
  updatedAt: new Date(),
  videoUrl: "exampleVideoUrl",
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    downloadedAt: new Date(),
    id: "exampleId",
    quality: "exampleQuality",
    updatedAt: new Date(),
    videoUrl: "exampleVideoUrl",
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  downloadedAt: new Date(),
  id: "exampleId",
  quality: "exampleQuality",
  updatedAt: new Date(),
  videoUrl: "exampleVideoUrl",
};

const service = {
  createDownloadHistory() {
    return CREATE_RESULT;
  },
  downloadHistories: () => FIND_MANY_RESULT,
  downloadHistory: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("DownloadHistory", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DownloadHistoryService,
          useValue: service,
        },
      ],
      controllers: [DownloadHistoryController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /downloadHistories", async () => {
    await request(app.getHttpServer())
      .post("/downloadHistories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        downloadedAt: CREATE_RESULT.downloadedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /downloadHistories", async () => {
    await request(app.getHttpServer())
      .get("/downloadHistories")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          downloadedAt: FIND_MANY_RESULT[0].downloadedAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /downloadHistories/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/downloadHistories"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /downloadHistories/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/downloadHistories"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        downloadedAt: FIND_ONE_RESULT.downloadedAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /downloadHistories existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/downloadHistories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        downloadedAt: CREATE_RESULT.downloadedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/downloadHistories")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
