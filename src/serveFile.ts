import { createReadStream } from 'fs';
import { RequestListener } from 'http';
import { resolve } from 'path';
import { ROOT_PATH } from './constants';
import { parseId } from './parseId';

export const serveFile: RequestListener = (request, response) => {
  const { url } = request;
  const id = parseId(url);
  const filePath = resolve(ROOT_PATH, id);
  const fileReadStream = createReadStream(filePath);
  fileReadStream.pipe(response);
};
