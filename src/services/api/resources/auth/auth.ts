import { getEnvParams } from 'core';

export function makeAuthApi() {
  return {
    getClockifyHeader() {
      return { 'X-Api-Key': getEnvParams().apiKey || '' };
    },
  };
}

export type Auth = ReturnType<typeof makeAuthApi>;
