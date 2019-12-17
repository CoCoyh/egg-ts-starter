/**
 * 框架扩展
 */
export default class Application {
  /**
   * redis保存值
   * @param key 键
   * @param value 值
   * @param expire  过期时间 单位：秒
   */
  public static async redisSet (key, value, expire?: any) {
    // @ts-ignore
    const redis = this.redis;
    await redis.set(key, value);
    if (expire) {
      await redis.expire(key, expire);
    }
  }

  public static async redisGet (key) {
    // @ts-ignore
    return this.redis.get(key);
  }

  /**
   * redis 删除 key
   * @param key
   */
  public static async redisDel (key) {
    //@ts-ignore
    return this.redisDel.del(key);
  }
}