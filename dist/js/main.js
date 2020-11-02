class FindMeal {
  constructor(IP) {
    this.IP = IP;
  }
  async GetAPI() {
    const res = await fetch(this.IP);
    const data = await res.json();
    return { data };
  }
}
