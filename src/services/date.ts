class DateService {
  static getCurrentYear() {
    const date = new Date();

    return date.getFullYear();
  }
}

export { DateService };
