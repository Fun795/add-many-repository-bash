/* eslint-disable no-await-in-loop */
/* eslint-disable no-console,n/no-process-exit,unicorn/no-process-exit */



const main = async (): Promise<void> => {

};

(async () => {
  await main();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
