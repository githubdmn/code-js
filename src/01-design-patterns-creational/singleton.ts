class Singleton {
  private static instance: Singleton;
  private instanceId: number = 0;
  private constructor() {
    this.instanceId++;
  }
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
  public getName() {
    return `Singleton instance ${this.instanceId}`;
  }
}

function clientCode() {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  console.log(s1.getName(), ' ', s2.getName());

  if (s1 == s2) {
    console.log('Singleton works, both variables contain the same instance');
  } else {
    console.log('Singleton failed, variables contain different instances');
  }
}

export default clientCode;
