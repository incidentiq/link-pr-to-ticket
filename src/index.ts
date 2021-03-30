import * as core from '@actions/core';
import * as github from '@actions/github';
import parseBranch from './helpers/parseBranch';

async function run(): Promise<void> {
  try {
    const branchName = github.context.payload.pull_request?.head.ref;
    const branchDetails = parseBranch(branchName);
    if (!branchDetails?.ticketNumber) {
      return;
    }

    const toke = core.getInput('repo-token', {required: true});
    const githubAPI = new github.GitHub(token);
  }
}
