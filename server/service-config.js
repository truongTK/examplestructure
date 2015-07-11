ServiceConfiguration.configurations.upsert(
  { service: "facebook" },
  {
    $set: {
      clientId: "1471294233164197",
      loginStyle: "popup",
      secret: "0f3bec34e3fb827031910c00dfdcfc85"
    }
  }
);

ServiceConfiguration.configurations.upsert(
  { service: "google" },
  {
    $set: {
      clientId: "11126875356-v5hfjjknviueulhtejd961b59ogptbci.apps.googleusercontent.com",
      loginStyle: "popup",
      secret: "nU-P-10YomLU_reoQtoAb1E8"
    }
  }
);

ServiceConfiguration.configurations.upsert(
  { service: "tweeter" },
  {
    $set: {
      clientId: "dlwJQlogDgqgtBfZzemuKEydF",
      loginStyle: "popup",
      secret: "b4ZfXvtLdlaM91jtRDjW8WyxgGCK8XGCOYmWIxSYfza9J9cqm3"
    }
  }
);
