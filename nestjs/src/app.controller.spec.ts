describe('AppController', () => {
  describe('getVenues', () => {
    it('should return an array of 10 venues', async () => {
      const limit = 10;
      const resp = await fetch(`http://localhost:4500/?limit=${limit}`);

      expect(resp.ok).toBeTruthy();
      expect((await resp.json()).length).toEqual(limit);
    });
  });
});
