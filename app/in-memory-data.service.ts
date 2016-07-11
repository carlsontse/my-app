export class InMemoryDataService {
  createDb() {
    let campaigns = [
      {id: 11, title: 'Hello there1', message: 'Mr. Nice', userId: 123},
      {id: 12, title: 'Hello there2', message: 'Narco', userId: 123},
      {id: 13, title: 'Hello there3', message: 'Bombasto', userId: 123},
      {id: 14, title: 'Hello there4', message: 'Celeritas', userId: 123},
      {id: 15, title: 'Hello there5', message: 'Magneta', userId: 123},
      {id: 16, title: 'Hello there6', message: 'RubberMan', userId: 123},
      {id: 17, title: 'Hello there7', message: 'Dynama', userId: 123},
      {id: 18, title: 'Hello there8', message: 'Dr IQ', userId: 123},
      {id: 19, title: 'Hello there9', message: 'Magma', userId: 123},
      {id: 20, title: 'Hello there10', message: 'Tornado', userId: 123}
    ];
    let subscriptions = [
      {id: 1, campaignId: 11, userId: 123},
      {id: 2, campaignId: 12, userId: 123}
    ];
    return {
      campaigns: campaigns,
      subscriptions: subscriptions
    };
  }
}
