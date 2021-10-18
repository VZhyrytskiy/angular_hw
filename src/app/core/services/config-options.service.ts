export interface ConfigModel {
  id: number;
  login: string;
  email: string;
}

export class ConfigOptionsService {
  private userConfig: ConfigModel = {
    id: 0,
    login: '',
    email: '',
  };

  constructor() {}

  setConfig(newConfig: Partial<ConfigModel>) {
    this.userConfig = { ...this.userConfig, ...newConfig };
  }

  getConfig():ConfigModel {
    return this.userConfig;
  }
}
