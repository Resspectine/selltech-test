/* eslint-disable import/no-extraneous-dependencies */
import bodyParser from 'body-parser';
import express from 'express';
import fetch, { Headers } from 'node-fetch';

const server = express();

server.use(bodyParser.json());

server.post('/', async (req, res) => {
  const headers = new Headers();
  headers.append('content-type', 'application/json');

  res.status(200).json(
    await (
      await fetch('http://152.228.215.94:83/api', {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers,
      })
    ).json()
  );
});

server.get('/', async (_, res) => {
  res.status(200).json('hello');
});

server.listen('3001', () => {
  console.log('success');
});
