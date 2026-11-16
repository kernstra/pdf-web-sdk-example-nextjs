// Owns the SDK's options; nothing runs until the first call.
// In next.config.ts, add to your config so the browser bundle has it:
//   env: { KERNSTRA_LICENSE: process.env.KERNSTRA_LICENSE },
import { Kernstra } from '@kernstra/pdf-web-sdk';

export const initKernstra = () =>
  Kernstra.init({ license: process.env.KERNSTRA_LICENSE ?? '' });
