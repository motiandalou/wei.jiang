import { http, HttpResponse } from "msw";

const VALID_USERNAME = "admin";
const VALID_PASSWORD = "one2data";
const VALID_TOKEN = "mock-token-123";

export const handlers = [
  // 登录接口
  http.post("/login", async ({ request }) => {
    const body = await request.json();
    const { username, password } = body;

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      return HttpResponse.json({
        success: true,
        message: "登录成功",
        data: {
          token: VALID_TOKEN,
        },
      });
    } else {
      return HttpResponse.json(
        {
          success: false,
          message: "用户名或密码错误",
        },
        { status: 401 }
      );
    }
  }),

  // 获取用户信息接口（需要携带 token）
  http.get("/user/profile", ({ request }) => {
    const authHeader = request.headers.get("Authorization");

    if (authHeader === `Bearer ${VALID_TOKEN}`) {
      return HttpResponse.json({
        success: true,
        data: {
          id: 1,
          username: VALID_USERNAME,
          nickname: "伟仔",
        },
      });
    } else {
      return HttpResponse.json(
        {
          success: false,
          message: "无效的 token",
        },
        { status: 401 }
      );
    }
  }),
  // 备份
  http.get("/api/user", () => {
    return HttpResponse.json({
      success: 200,
      data: {
        totalCount: 2,
        list: [
          {
            uuid: "1",
            name: "张三",
            tagList: ["1", "2"],
            backupClient: {
              deviceName: "localhost",
              mainIp: "1.1.1.1",
            },
            taskState: "normal",
            policyName: "normal",
            isOriginalPolicy: "normal",
            latestWorkTime: "2024-01-01",
            backupInfo: "世界还小",
            percent: 0,
            rate: 0,
          },
          {
            uuid: "2",
            name: "李四",
            tagList: ["1", "2"],
            backupClient: {
              deviceName: "localhost",
              mainIp: "1.1.1.1",
            },
            taskState: "normal",
            policyName: "normal",
            isOriginalPolicy: "normal",
            latestWorkTime: "2024-01-02",
            backupInfo: "世界还小",
            percent: 0,
            rate: 0,
          },
        ],
      },
    });
  }),
];
