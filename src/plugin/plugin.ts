import { Monitor } from '../system/monitor';
import { id } from '../util';
export abstract class Plugin {
  public monitor!: Monitor;
  public uuid: number;

  constructor() {
    this.uuid = id();
  }

  public visit(monitor: Monitor): void {
    this.monitor = monitor;
  }

  public run(): void {
    throw new Error('unimplemented');
  }

  public destroy(): void {
    throw new Error('unimplemented');
  }
}