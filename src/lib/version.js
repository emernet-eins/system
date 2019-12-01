/**
 * This provides some very basci "api" to get and work with EMERNET's version number
 */
class Version {
  /**
   * Fetches the version from the version.md-file
   */
  static async getVersion() {
    const versionNumber = await fetch('/version.md')
      .then(response => {
        if (response.ok) {
          return response.text();
        }
        throw new Error('Could not find, get, or read version.md.');
      })
      .then(version => version);
    return versionNumber;
  }

  /**
   * Ugly way of keeping the version number in the title up to date
   */
  static async writeVersionToTitle() {
    document.querySelector('title').innerText =
      'EMERNET E.I.N.S v' + (await this.getVersion());
  }
}

export default Version;
