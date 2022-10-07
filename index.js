// Checks API example
// See: https://developer.github.com/v3/checks/ to learn more

/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  app.on(["pull_request.opened", 'pull_request.synchronize', "pull_request.reopened"], check);

  async function check(context) {
    const startTime = new Date();

      app.log.debug({ event: context.name, action: context.payload.action });
      const { pull_request, installation, organization, repository } = context.payload;

      // // Probot API note: context.repo() => {username: 'hiimbex', repo: 'testing-things'}
    // return context.octokit.checks.create(
    //   context.repo({
    //     checkName: `My app! ${headSha}`,
    //     head_branch: headBranch,
    //     head_sha: headSha,
    //     status: "completed",
    //     started_at: startTime,
    //     conclusion: "success",
    //     completed_at: new Date(),
    //     output: {
    //       title: "Probot check!",
    //       summary: "The check has passed!",
    //     },
    //   })
    // );

      const octokit = context.octokit;
       // const changedFiles = pull_request.changed_files;
      const owner = pull_request.head.repo.owner.login;
      const repo = pull_request.head.repo.name;
      const prNum = pull_request.number;
      const baseSha = pull_request.base.sha;
      const headSha = pull_request.head.sha;

      let checkName = "BG Test Check";
      return await context.octokit.checks.create({
          headers: {
              accept: "application/vnd.github.v3+json"
          },
          context,
          owner,
          repo,
          name: checkName,
          status: "queued",
          started_at: startTime,
          head_sha: headSha,
          output: {
              title: checkName,
              summary: "Testings",
          },
      });
  }

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
