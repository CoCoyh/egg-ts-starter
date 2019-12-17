import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1575535512668_7871';

  // add your egg config in here
  config.middleware = [ 'exception' ];

  config.jwt = {
    secret: 'COCO'
  }

  config.security = {
    csrf: {
      enable: false,
    }
  }

  const whitelist = [
    // images
    '.jpg', '.jpeg', // image/jpeg
    '.png', // image/png, image/x-png
    '.gif', // image/gif
    '.bmp', // image/bmp
    '.wbmp', // image/vnd.wap.wbmp
    '.webp',
    '.tif',
    '.psd',
    // text
    '.svg',
    '.js', '.jsx',
    '.json',
    '.css', '.less',
    '.html', '.htm',
    '.xml',
    // tar
    '.zip',
    '.gz', '.tgz', '.gzip',
    // video
    '.mp3',
    '.mp4',
    '.avi',
    '.xlsx',
    '.xls',
  ];

  config.multipart = {
    fileSize: '100mb',
    mode: 'file',
    whitelist
  };

  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: '',
      db: 0,
    },
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
