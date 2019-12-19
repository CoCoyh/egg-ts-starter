import { BaseController } from 'egg-ts-controller';
import routerDecorator from 'egg-ts-router';
import { Context } from 'egg';


@routerDecorator.prefix('/user', ['add', 'delete', 'update', 'info', 'list', 'page'])
export default class HomeController extends BaseController {
  constructor (ctx: Context) {
    super(ctx);
    this.setEntity(this.ctx.repo.User)
  }
}
