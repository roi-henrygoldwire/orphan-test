import Realm from "realm";
import UpdateMode = Realm.UpdateMode;

const schema: Realm.ObjectSchema[] = [
    {
        name: 'Parent',
        primaryKey: 'name',
        properties: {
            name: 'string',
            children: 'Child[]'
        },
    },
    {
        name: 'Child',
        properties: {
            nickname: 'string?',
            pets: 'Pet[]'
        }
    },
    {
        name: 'Pet',
        properties: {
            name: 'string',
            fleas: 'int'
        }
    }
];

const parent1 = {
    name: "Parent 1",
    children: [
        {
            nickname: "fred",
            pets: [
                {name: "fido", fleas: 5},
                {name: "cat", fleas: 0},
            ]
        },
        {
            nickname: "wilma",
            pets: []
        }
    ]
};

const parent2 = {
    name: "Parent 1",
    children: [
        {
            nickname: "fred",
            pets: [
                {name: "fido", fleas: 5},
            ]
        },
        {
            nickname: "wilma",
            pets: [
                {name: "bird", fleas: 5},
            ]
        }
    ]
};


const connect = async (hostname: string, realmName: string) => {
    const serverUrl = `https://${hostname}`;
    const creds = Realm.Sync.Credentials.nickname("orphan-test");
    const user = await Realm.Sync.User.login(serverUrl, creds);
    const config = user.createConfiguration({
        schema: schema,
        schemaVersion: 1,
        sync: {
            url: `realms://${hostname}/${realmName}`,
            fullSynchronization: true,
        }
    });
    return Realm.open(config).progress(console.log);
};

const host = 'delmejunk.us1a.cloud.realm.io';

const withOrphans = (realm = '~/with-orphans') => {
    connect(host, realm).then(realm => {
        console.log("realm is", realm.path, JSON.stringify(realm.schema, null, 4));
        realm.write(() => {
            realm.create('Parent', parent1, UpdateMode.Modified);
        });

        realm.write(() => {
            realm.create('Parent', parent2, UpdateMode.Modified);
        });

        realm.write(() => {
            realm.create('Parent', parent1, UpdateMode.Modified);
        });
    });
};

const withoutOrphans = (realm = '~/without-orphans') => {
    connect(host, realm).then(realm => {
        console.log("realm is", realm.path, JSON.stringify(realm.schema, null, 4));
        let p:any = {};
        realm.write(() => {
            p = realm.create('Parent', parent1, UpdateMode.Modified);
        });

        // creates orphans
        realm.write(() => {
            p.children = parent2.children;
        });

        // realm.write(() => {
        //     realm.create('Parent', parent1, UpdateMode.Modified);
        // });
    });
};

withoutOrphans();
