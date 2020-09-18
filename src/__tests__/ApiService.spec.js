import ApiService from "../service/ApiService";

test("can get issues", async () => {
  const service = new ApiService();
  const res = await service.getIssues();
  expect(res).toBeDefined();
});
