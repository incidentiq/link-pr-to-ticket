export default function parseBranch(branchName: string): BranchDetails {
  const split = branchName.split('/');
  const type = split.length === 2 ? split[0] : 'base';
  const details = type === 'hotfix' ? getHotfixDetails(branchName) : getBaseDetails;
  return {type, ...details};
}

function getHotfixDetails(branchName: string): Object {
  const split = branchName.split('-');
  const parent = `${split[0]}-${split[1]}-${split[2]}-${split[3]}`;
  return {year: split[1], month: split[2], day: split[3], ticketNumber: split[4], parent}
}

function getBaseDetails(branchName: string): Object {
  const ticketNumber = branchName.replace(/(^.*\[|\].*$)/g, '').replace(' ', '').replace('#', '');
  return {ticketNumber};
}