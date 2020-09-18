export default class ApiService {
  async getIssues() {
    const res = await fetch(
      "https://api.github.com/repos/facebook/react/issues"
    );
    const json = await res.json();
    return json;
  }
}
