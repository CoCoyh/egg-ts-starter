import * as ipdb from 'ipip-ipdb';

export default class Helper {
  /**
   *  获得请求IP
   */
  public static async getReqIp () {
    // @ts-ignore
    const req = this.ctx.req;
    return req.headers['x-forward-for'] || // 判断是否有反响代理IP
      req.connection.remoteAddress || // 判断connection的远程 IP
      req.socket.remoteAddress || // 判断后端的 socket 的 IP
      req.connection.socket.remoteAddress;
  }

  /**
   * 根据IP获取请求地址
   * @param ip 为空时则为当前请求的IP地址
   */
  public static async getIpAddr (ip?: string) {
    if (!ip) {
      ip = await this.getReqIp();
    }

    const bst = new ipdb.BaseStation('app/resource/ipip/ipipfree.ipdb');
    const result = bst.findInfo(ip, 'CN')
    let addr = '';
    if (result) {
      if (result.regionName === result.cictyName) {
        addr = result.countryName + result.regionName;
      } else {
        addr = result.countryName + result.regionName + result.cityName;
      }
    }
    if (addr.indexOf('本机') !== -1) {
      addr = '本机地址';
      return addr;
    }
    if (addr.indexOf('局域网') !== -1) {
      addr = '局域网';
    }
    return addr;
  }
}