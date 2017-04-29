const users = [
  {
    id: '1',
    createdOn: new Date().getTime(),
    name: 'Ripley',
    bio: '',
    avatar: 'http://content7.flixster.com/photo/14/06/29/14062925_gal.jpg',
    artCreated: [
      {
        id: '101',
        createdOn: new Date().getTime(),
        title: 'Curabitur finibus maximus purus eu viverra',
        image: 'https://s-media-cache-ak0.pinimg.com/736x/f2/c3/9c/f2c39c1651d11f47c5a5f35f205663fa.jpg',
      },
      {
        id: '102',
        createdOn: new Date().getTime(),
        title: 'Aenean',
        image: 'https://s-media-cache-ak0.pinimg.com/736x/7c/17/ba/7c17ba3567c1311530b81f5bb84365ef.jpg',
      },
    ],
    sketchbooksCreated: [
      {
        id: '11',
        createdOn: new Date().getTime(),
        title: 'I say we take off and nuke it from orbit.',
      },
    ],
    critiquesCreated: [
      {
        id: '1001',
        createdOn: new Date().getTime(),
        createdBy: {
          id: '1',
          createdOn: new Date().getTime(),
          name: 'Ripley',
          avatar: 'http://content7.flixster.com/photo/14/06/29/14062925_gal.jpg',
        },
        title: '',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae enim eget ipsum vestibulum auctor. Maecenas faucibus mauris at mollis dictum. Nulla vulputate elementum augue, vitae auctor nulla. Phasellus vulputate dolor velit, nec imperdiet ante imperdiet dapibus. Mauris mollis risus tellus, nec mattis risus laoreet consequat. Praesent non commodo elit. Cras posuere faucibus lectus ut finibus. Pellentesque fermentum dignissim lectus, at eleifend lectus posuere nec. Aenean tincidunt pulvinar tortor ut consequat. Proin et aliquam lacus, sed porttitor ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis id nisl eu bibendum. Integer mollis justo quis nulla semper faucibus.\nAliquam efficitur et velit id sollicitudin. Phasellus pellentesque id risus in semper. Etiam egestas sagittis diam eget rutrum. Vivamus gravida nunc iaculis libero blandit, id viverra enim condimentum. Nunc et neque nunc. Fusce ut volutpat turpis. Aenean felis quam, rhoncus vitae fermentum non, gravida in nunc. Vivamus ut lacus eget ex elementum tempus. Aliquam tristique eget odio nec volutpat. Ut vestibulum, purus vel venenatis maximus, neque ipsum iaculis lectus, at efficitur dolor nunc ut dui. Aliquam non arcu quis dui rutrum convallis at vitae augue. Praesent ac condimentum nunc. Nullam vitae turpis sed diam vulputate vestibulum.\nDonec aliquam purus rutrum dictum luctus. Praesent consequat vestibulum neque, eget tempus sapien sagittis quis. Cras nibh quam, tristique sit amet massa sit amet, gravida dictum purus. Nunc placerat elementum est in tincidunt. Proin faucibus arcu sit amet sem dictum ullamcorper. Proin fringilla scelerisque felis, eu sodales massa euismod sed. Vivamus eget sodales enim. Praesent rhoncus, dolor a semper lobortis, velit mauris convallis quam, vel sollicitudin augue metus eu lorem.',
        art: {
          id: '103',
          createdOn: new Date().getTime(),
          title: 'commodo nisi mi, tempor',
          image: 'https://s-media-cache-ak0.pinimg.com/736x/20/47/62/204762886a94f325a1d347f232e8eff6.jpg',
        },
        thankedBy: [
          {
            id: '2',
            createdOn: new Date().getTime(),
            name: 'Sarah',
            avatar: 'https://upload.wikimedia.org/wikipedia/en/8/81/Sarah_Connor_(Linda_Hamilton).jpg',
          },
          {
            id: '3',
            createdOn: new Date().getTime(),
            name: 'Diana',
            avatar: 'http://i.huffpost.com/gen/1259191/thumbs/o-LYNDA-CARTER-WONDER-WOMAN-570.jpg?6',
          },
          {
            id: '5',
            createdOn: new Date().getTime(),
            name: 'Selena',
            avatar: 'http://img.cinemablend.com/cb/1/8/f/a/b/a/18fabad9330db27316d87626a9aa844ad7fb0d124c1a8964c34b9134545e6352.jpg',
          },
        ],
      },
      { id: '1002' },
    ],
    artLiked: [
      {
        id: '103',
        createdOn: new Date().getTime(),
        title: 'commodo nisi mi, tempor',
        image: 'https://s-media-cache-ak0.pinimg.com/736x/20/47/62/204762886a94f325a1d347f232e8eff6.jpg',
      },
      {
        id: '105',
        createdOn: new Date().getTime(),
        title: 'Vestibulum',
        image: 'https://img0.etsystatic.com/064/1/5261196/il_340x270.757419446_8ueg.jpg',
      },
    ],
    sketchbooksLiked: [
      {
        id: '13',
        createdOn: new Date().getTime(),
        title: 'Suffering Sappho!',
      },
      {
        id: '15',
        createdOn: new Date().getTime(),
        title: 'I am Catwoman. Hear me roar.',
      },
    ],
    critiquesLiked: [{ id: '1004' }, { id: '1005' }],
    followers: [
      {
        id: '2',
        createdOn: new Date().getTime(),
        name: 'Sarah',
        avatar: 'https://upload.wikimedia.org/wikipedia/en/8/81/Sarah_Connor_(Linda_Hamilton).jpg',
      },
      {
        id: '3',
        createdOn: new Date().getTime(),
        name: 'Diana',
        avatar: 'http://i.huffpost.com/gen/1259191/thumbs/o-LYNDA-CARTER-WONDER-WOMAN-570.jpg?6',
      },
      {
        id: '4',
        createdOn: new Date().getTime(),
        name: 'Holtzman',
        avatar: 'http://static2.hypable.com/wp-content/uploads/2016/07/Ghostbusters-Jillian-Holtzman-Kate-McKinnon.jpg',
      },
      {
        id: '5',
        createdOn: new Date().getTime(),
        name: 'Selena',
        avatar: 'http://img.cinemablend.com/cb/1/8/f/a/b/a/18fabad9330db27316d87626a9aa844ad7fb0d124c1a8964c34b9134545e6352.jpg',
      },
    ],
    following: [
      {
        id: '2',
        createdOn: new Date().getTime(),
        name: 'Sarah',
        avatar: 'https://upload.wikimedia.org/wikipedia/en/8/81/Sarah_Connor_(Linda_Hamilton).jpg',
      },
      {
        id: '4',
        createdOn: new Date().getTime(),
        name: 'Holtzman',
        avatar: 'http://static2.hypable.com/wp-content/uploads/2016/07/Ghostbusters-Jillian-Holtzman-Kate-McKinnon.jpg',
      },
    ],
  },
  {
    id: '2',
    createdOn: new Date().getTime(),
    name: 'Sarah',
    bio: '',
    avatar: 'https://upload.wikimedia.org/wikipedia/en/8/81/Sarah_Connor_(Linda_Hamilton).jpg',
    artCreated: [],
    sketchbooksCreated: [
      {
        id: '12',
        createdOn: new Date().getTime(),
        title: 'The future is like a highway at night.',
      },
    ],
    critiquesCreated: [{ id: '1003' }],
    artLiked: [
      {
        id: '101',
        createdOn: new Date().getTime(),
        title: 'Curabitur finibus maximus purus eu viverra',
        image: 'https://s-media-cache-ak0.pinimg.com/736x/f2/c3/9c/f2c39c1651d11f47c5a5f35f205663fa.jpg',
      },
      {
        id: '102',
        createdOn: new Date().getTime(),
        title: 'Aenean',
        image: 'https://s-media-cache-ak0.pinimg.com/736x/7c/17/ba/7c17ba3567c1311530b81f5bb84365ef.jpg',
      },
    ],
    sketchbooksLiked: [
      {
        id: '11',
        createdOn: new Date().getTime(),
        title: 'I say we take off and nuke it from orbit.',
      },
    ],
    critiquesLiked: [
      {
        id: '1001',
        createdOn: new Date().getTime(),
        createdBy: {
          id: '1',
          createdOn: new Date().getTime(),
          name: 'Ripley',
          avatar: 'http://content7.flixster.com/photo/14/06/29/14062925_gal.jpg',
        },
        title: '',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae enim eget ipsum vestibulum auctor. Maecenas faucibus mauris at mollis dictum. Nulla vulputate elementum augue, vitae auctor nulla. Phasellus vulputate dolor velit, nec imperdiet ante imperdiet dapibus. Mauris mollis risus tellus, nec mattis risus laoreet consequat. Praesent non commodo elit. Cras posuere faucibus lectus ut finibus. Pellentesque fermentum dignissim lectus, at eleifend lectus posuere nec. Aenean tincidunt pulvinar tortor ut consequat. Proin et aliquam lacus, sed porttitor ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis id nisl eu bibendum. Integer mollis justo quis nulla semper faucibus.\nAliquam efficitur et velit id sollicitudin. Phasellus pellentesque id risus in semper. Etiam egestas sagittis diam eget rutrum. Vivamus gravida nunc iaculis libero blandit, id viverra enim condimentum. Nunc et neque nunc. Fusce ut volutpat turpis. Aenean felis quam, rhoncus vitae fermentum non, gravida in nunc. Vivamus ut lacus eget ex elementum tempus. Aliquam tristique eget odio nec volutpat. Ut vestibulum, purus vel venenatis maximus, neque ipsum iaculis lectus, at efficitur dolor nunc ut dui. Aliquam non arcu quis dui rutrum convallis at vitae augue. Praesent ac condimentum nunc. Nullam vitae turpis sed diam vulputate vestibulum.\nDonec aliquam purus rutrum dictum luctus. Praesent consequat vestibulum neque, eget tempus sapien sagittis quis. Cras nibh quam, tristique sit amet massa sit amet, gravida dictum purus. Nunc placerat elementum est in tincidunt. Proin faucibus arcu sit amet sem dictum ullamcorper. Proin fringilla scelerisque felis, eu sodales massa euismod sed. Vivamus eget sodales enim. Praesent rhoncus, dolor a semper lobortis, velit mauris convallis quam, vel sollicitudin augue metus eu lorem.',
        art: {
          id: '103',
          createdOn: new Date().getTime(),
          title: 'commodo nisi mi, tempor',
          image: 'https://s-media-cache-ak0.pinimg.com/736x/20/47/62/204762886a94f325a1d347f232e8eff6.jpg',
        },
        thankedBy: [
          {
            id: '2',
            createdOn: new Date().getTime(),
            name: 'Sarah',
            avatar: 'https://upload.wikimedia.org/wikipedia/en/8/81/Sarah_Connor_(Linda_Hamilton).jpg',
          },
          {
            id: '3',
            createdOn: new Date().getTime(),
            name: 'Diana',
            avatar: 'http://i.huffpost.com/gen/1259191/thumbs/o-LYNDA-CARTER-WONDER-WOMAN-570.jpg?6',
          },
          {
            id: '5',
            createdOn: new Date().getTime(),
            name: 'Selena',
            avatar: 'http://img.cinemablend.com/cb/1/8/f/a/b/a/18fabad9330db27316d87626a9aa844ad7fb0d124c1a8964c34b9134545e6352.jpg',
          },
        ],
      },
      { id: '1002' },
      { id: '1005' },
    ],
    followers: [
      {
        id: '1',
        createdOn: new Date().getTime(),
        name: 'Ripley',
        avatar: 'http://content7.flixster.com/photo/14/06/29/14062925_gal.jpg',
      },
    ],
    following: [
      {
        id: '1',
        createdOn: new Date().getTime(),
        name: 'Ripley',
        avatar: 'http://content7.flixster.com/photo/14/06/29/14062925_gal.jpg',
      },
      {
        id: '4',
        createdOn: new Date().getTime(),
        name: 'Holtzman',
        avatar: 'http://static2.hypable.com/wp-content/uploads/2016/07/Ghostbusters-Jillian-Holtzman-Kate-McKinnon.jpg',
      },
    ],
  },
  {
    id: '3',
    createdOn: new Date().getTime(),
    name: 'Diana',
    bio: '',
    avatar: 'http://i.huffpost.com/gen/1259191/thumbs/o-LYNDA-CARTER-WONDER-WOMAN-570.jpg?6',
    artCreated: [
      {
        id: '103',
        createdOn: new Date().getTime(),
        title: 'commodo nisi mi, tempor',
        image: 'https://s-media-cache-ak0.pinimg.com/736x/20/47/62/204762886a94f325a1d347f232e8eff6.jpg',
      },
    ],
    sketchbooksCreated: [
      {
        id: '13',
        createdOn: new Date().getTime(),
        title: 'Suffering Sappho!',
      },
    ],
    critiquesCreated: [{ id: '1004' }, { id: '1005' }],
    artLiked: [
      {
        id: '102',
        createdOn: new Date().getTime(),
        title: 'Aenean',
        image: 'https://s-media-cache-ak0.pinimg.com/736x/7c/17/ba/7c17ba3567c1311530b81f5bb84365ef.jpg',
      },
    ],
    sketchbooksLiked: [
      {
        id: '12',
        createdOn: new Date().getTime(),
        title: 'The future is like a highway at night.',
      },
    ],
    critiquesLiked: [
      {
        id: '1001',
        createdOn: new Date().getTime(),
        createdBy: {
          id: '1',
          createdOn: new Date().getTime(),
          name: 'Ripley',
          avatar: 'http://content7.flixster.com/photo/14/06/29/14062925_gal.jpg',
        },
        title: '',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae enim eget ipsum vestibulum auctor. Maecenas faucibus mauris at mollis dictum. Nulla vulputate elementum augue, vitae auctor nulla. Phasellus vulputate dolor velit, nec imperdiet ante imperdiet dapibus. Mauris mollis risus tellus, nec mattis risus laoreet consequat. Praesent non commodo elit. Cras posuere faucibus lectus ut finibus. Pellentesque fermentum dignissim lectus, at eleifend lectus posuere nec. Aenean tincidunt pulvinar tortor ut consequat. Proin et aliquam lacus, sed porttitor ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis id nisl eu bibendum. Integer mollis justo quis nulla semper faucibus.\nAliquam efficitur et velit id sollicitudin. Phasellus pellentesque id risus in semper. Etiam egestas sagittis diam eget rutrum. Vivamus gravida nunc iaculis libero blandit, id viverra enim condimentum. Nunc et neque nunc. Fusce ut volutpat turpis. Aenean felis quam, rhoncus vitae fermentum non, gravida in nunc. Vivamus ut lacus eget ex elementum tempus. Aliquam tristique eget odio nec volutpat. Ut vestibulum, purus vel venenatis maximus, neque ipsum iaculis lectus, at efficitur dolor nunc ut dui. Aliquam non arcu quis dui rutrum convallis at vitae augue. Praesent ac condimentum nunc. Nullam vitae turpis sed diam vulputate vestibulum.\nDonec aliquam purus rutrum dictum luctus. Praesent consequat vestibulum neque, eget tempus sapien sagittis quis. Cras nibh quam, tristique sit amet massa sit amet, gravida dictum purus. Nunc placerat elementum est in tincidunt. Proin faucibus arcu sit amet sem dictum ullamcorper. Proin fringilla scelerisque felis, eu sodales massa euismod sed. Vivamus eget sodales enim. Praesent rhoncus, dolor a semper lobortis, velit mauris convallis quam, vel sollicitudin augue metus eu lorem.',
        art: {
          id: '103',
          createdOn: new Date().getTime(),
          title: 'commodo nisi mi, tempor',
          image: 'https://s-media-cache-ak0.pinimg.com/736x/20/47/62/204762886a94f325a1d347f232e8eff6.jpg',
        },
        thankedBy: [
          {
            id: '2',
            createdOn: new Date().getTime(),
            name: 'Sarah',
            avatar: 'https://upload.wikimedia.org/wikipedia/en/8/81/Sarah_Connor_(Linda_Hamilton).jpg',
          },
          {
            id: '3',
            createdOn: new Date().getTime(),
            name: 'Diana',
            avatar: 'http://i.huffpost.com/gen/1259191/thumbs/o-LYNDA-CARTER-WONDER-WOMAN-570.jpg?6',
          },
          {
            id: '5',
            createdOn: new Date().getTime(),
            name: 'Selena',
            avatar: 'http://img.cinemablend.com/cb/1/8/f/a/b/a/18fabad9330db27316d87626a9aa844ad7fb0d124c1a8964c34b9134545e6352.jpg',
          },
        ],
      },
    ],
    followers: [
      {
        id: '5',
        createdOn: new Date().getTime(),
        name: 'Selena',
        avatar: 'http://img.cinemablend.com/cb/1/8/f/a/b/a/18fabad9330db27316d87626a9aa844ad7fb0d124c1a8964c34b9134545e6352.jpg',
      },
    ],
    following: [
      {
        id: '1',
        createdOn: new Date().getTime(),
        name: 'Ripley',
        avatar: 'http://content7.flixster.com/photo/14/06/29/14062925_gal.jpg',
      },
      {
        id: '4',
        createdOn: new Date().getTime(),
        name: 'Holtzman',
        avatar: 'http://static2.hypable.com/wp-content/uploads/2016/07/Ghostbusters-Jillian-Holtzman-Kate-McKinnon.jpg',
      },
    ],
  },
  {
    id: '4',
    createdOn: new Date().getTime(),
    name: 'Holtzman',
    bio: '',
    avatar: 'http://static2.hypable.com/wp-content/uploads/2016/07/Ghostbusters-Jillian-Holtzman-Kate-McKinnon.jpg',
    artCreated: [],
    sketchbooksCreated: [
      {
        id: '14',
        createdOn: new Date().getTime(),
        title: 'Just try saying no to these salty parabolas!',
      },
    ],
    critiquesCreated: [],
    artLiked: [],
    sketchbooksLiked: [
      {
        id: '12',
        createdOn: new Date().getTime(),
        title: 'The future is like a highway at night.',
      },
    ],
    critiquesLiked: [{ id: '1005' }],
    followers: [
      {
        id: '1',
        createdOn: new Date().getTime(),
        name: 'Ripley',
        avatar: 'http://content7.flixster.com/photo/14/06/29/14062925_gal.jpg',
      },
      {
        id: '2',
        createdOn: new Date().getTime(),
        name: 'Sarah',
        avatar: 'https://upload.wikimedia.org/wikipedia/en/8/81/Sarah_Connor_(Linda_Hamilton).jpg',
      },
      {
        id: '3',
        createdOn: new Date().getTime(),
        name: 'Diana',
        avatar: 'http://i.huffpost.com/gen/1259191/thumbs/o-LYNDA-CARTER-WONDER-WOMAN-570.jpg?6',
      },
      {
        id: '5',
        createdOn: new Date().getTime(),
        name: 'Selena',
        avatar: 'http://img.cinemablend.com/cb/1/8/f/a/b/a/18fabad9330db27316d87626a9aa844ad7fb0d124c1a8964c34b9134545e6352.jpg',
      },
    ],
    following: [
      {
        id: '1',
        createdOn: new Date().getTime(),
        name: 'Ripley',
        avatar: 'http://content7.flixster.com/photo/14/06/29/14062925_gal.jpg',
      },
    ],
  },
  {
    id: '5',
    createdOn: new Date().getTime(),
    name: 'Selena',
    bio: '',
    avatar: 'http://img.cinemablend.com/cb/1/8/f/a/b/a/18fabad9330db27316d87626a9aa844ad7fb0d124c1a8964c34b9134545e6352.jpg',
    artCreated: [
      {
        id: '104',
        createdOn: new Date().getTime(),
        title: 'mollis metus blandit eu',
        image: 'http://www.painterartist.com/static/ptr/product_content/painter/2017/feature-slides/10.jpg',
      },
      {
        id: '105',
        createdOn: new Date().getTime(),
        title: 'Vestibulum',
        image: 'https://img0.etsystatic.com/064/1/5261196/il_340x270.757419446_8ueg.jpg',
      },
    ],
    sketchbooksCreated: [
      {
        id: '15',
        createdOn: new Date().getTime(),
        title: 'I am Catwoman. Hear me roar.',
      },
    ],
    critiquesCreated: [],
    artLiked: [
      {
        id: '101',
        createdOn: new Date().getTime(),
        title: 'Curabitur finibus maximus purus eu viverra',
        image: 'https://s-media-cache-ak0.pinimg.com/736x/f2/c3/9c/f2c39c1651d11f47c5a5f35f205663fa.jpg',
      },
    ],
    sketchbooksLiked: [],
    critiquesLiked: [
      {
        id: '1001',
        createdOn: new Date().getTime(),
        createdBy: {
          id: '1',
          createdOn: new Date().getTime(),
          name: 'Ripley',
          avatar: 'http://content7.flixster.com/photo/14/06/29/14062925_gal.jpg',
        },
        title: '',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae enim eget ipsum vestibulum auctor. Maecenas faucibus mauris at mollis dictum. Nulla vulputate elementum augue, vitae auctor nulla. Phasellus vulputate dolor velit, nec imperdiet ante imperdiet dapibus. Mauris mollis risus tellus, nec mattis risus laoreet consequat. Praesent non commodo elit. Cras posuere faucibus lectus ut finibus. Pellentesque fermentum dignissim lectus, at eleifend lectus posuere nec. Aenean tincidunt pulvinar tortor ut consequat. Proin et aliquam lacus, sed porttitor ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis id nisl eu bibendum. Integer mollis justo quis nulla semper faucibus.\nAliquam efficitur et velit id sollicitudin. Phasellus pellentesque id risus in semper. Etiam egestas sagittis diam eget rutrum. Vivamus gravida nunc iaculis libero blandit, id viverra enim condimentum. Nunc et neque nunc. Fusce ut volutpat turpis. Aenean felis quam, rhoncus vitae fermentum non, gravida in nunc. Vivamus ut lacus eget ex elementum tempus. Aliquam tristique eget odio nec volutpat. Ut vestibulum, purus vel venenatis maximus, neque ipsum iaculis lectus, at efficitur dolor nunc ut dui. Aliquam non arcu quis dui rutrum convallis at vitae augue. Praesent ac condimentum nunc. Nullam vitae turpis sed diam vulputate vestibulum.\nDonec aliquam purus rutrum dictum luctus. Praesent consequat vestibulum neque, eget tempus sapien sagittis quis. Cras nibh quam, tristique sit amet massa sit amet, gravida dictum purus. Nunc placerat elementum est in tincidunt. Proin faucibus arcu sit amet sem dictum ullamcorper. Proin fringilla scelerisque felis, eu sodales massa euismod sed. Vivamus eget sodales enim. Praesent rhoncus, dolor a semper lobortis, velit mauris convallis quam, vel sollicitudin augue metus eu lorem.',
        art: {
          id: '103',
          createdOn: new Date().getTime(),
          title: 'commodo nisi mi, tempor',
          image: 'https://s-media-cache-ak0.pinimg.com/736x/20/47/62/204762886a94f325a1d347f232e8eff6.jpg',
        },
        thankedBy: [
          {
            id: '2',
            createdOn: new Date().getTime(),
            name: 'Sarah',
            avatar: 'https://upload.wikimedia.org/wikipedia/en/8/81/Sarah_Connor_(Linda_Hamilton).jpg',
          },
          {
            id: '3',
            createdOn: new Date().getTime(),
            name: 'Diana',
            avatar: 'http://i.huffpost.com/gen/1259191/thumbs/o-LYNDA-CARTER-WONDER-WOMAN-570.jpg?6',
          },
          {
            id: '5',
            createdOn: new Date().getTime(),
            name: 'Selena',
            avatar: 'http://img.cinemablend.com/cb/1/8/f/a/b/a/18fabad9330db27316d87626a9aa844ad7fb0d124c1a8964c34b9134545e6352.jpg',
          },
        ],
      },
      { id: '1002' },
      { id: '1005' },
    ],
    followers: [],
    following: [
      {
        id: '1',
        createdOn: new Date().getTime(),
        name: 'Ripley',
        avatar: 'http://content7.flixster.com/photo/14/06/29/14062925_gal.jpg',
      },
      {
        id: '3',
        createdOn: new Date().getTime(),
        name: 'Diana',
        avatar: 'http://i.huffpost.com/gen/1259191/thumbs/o-LYNDA-CARTER-WONDER-WOMAN-570.jpg?6',
      },
      {
        id: '4',
        createdOn: new Date().getTime(),
        name: 'Holtzman',
        avatar: 'http://static2.hypable.com/wp-content/uploads/2016/07/Ghostbusters-Jillian-Holtzman-Kate-McKinnon.jpg',
      },
    ],
  },
];

const sketchbooks = [
  {
    id: '11',
    createdOn: new Date().getTime(),
    createdBy: {
      id: '1',
      createdOn: new Date().getTime(),
      name: 'Ripley',
      avatar: 'http://content7.flixster.com/photo/14/06/29/14062925_gal.jpg',
    },
    title: 'I say we take off and nuke it from orbit.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam enim, porttitor eget sapien id, sollicitudin finibus justo. Pellentesque id arcu semper, blandit magna id, gravida metus. Mauris ut pharetra risus, sit amet semper ante. Vestibulum orci ex, semper at maximus sed, dapibus sed massa. Praesent aliquet, nunc a sagittis cursus, purus libero venenatis nunc, eu molestie purus ex at elit. Nam tristique luctus massa, a eleifend lacus euismod vitae. Sed et ullamcorper libero. Integer tincidunt aliquet orci, et porttitor nibh ultricies in. Nulla facilisis ultricies condimentum.\nPraesent rhoncus sem sed ipsum mattis, sed tempus erat porttitor. Maecenas non mauris egestas, finibus metus vel, consequat nisl. Phasellus interdum molestie est, sit amet mattis sem ultrices id. Nulla eget massa sapien. Sed auctor egestas lacus, eget facilisis arcu porta at. Vestibulum ultricies vulputate euismod. Donec sem orci, commodo quis magna eu, malesuada posuere odio.',
    art: [
      {
        id: '101',
        createdOn: new Date().getTime(),
        title: 'Curabitur finibus maximus purus eu viverra',
        image: 'https://s-media-cache-ak0.pinimg.com/736x/f2/c3/9c/f2c39c1651d11f47c5a5f35f205663fa.jpg',
      },
      {
        id: '102',
        createdOn: new Date().getTime(),
        title: 'Aenean',
        image: 'https://s-media-cache-ak0.pinimg.com/736x/7c/17/ba/7c17ba3567c1311530b81f5bb84365ef.jpg',
      },
    ],
    likedBy: [
      {
        id: '2',
        createdOn: new Date().getTime(),
        name: 'Sarah',
        avatar: 'https://upload.wikimedia.org/wikipedia/en/8/81/Sarah_Connor_(Linda_Hamilton).jpg',
      },
    ],
  },
  {
    id: '12',
    createdOn: new Date().getTime(),
    createdBy: {
      id: '2',
      createdOn: new Date().getTime(),
      name: 'Sarah',
      avatar: 'https://upload.wikimedia.org/wikipedia/en/8/81/Sarah_Connor_(Linda_Hamilton).jpg',
    },
    title: 'The future is like a highway at night.',
    description: 'Pellentesque in lectus id velit ultricies tempus vel ut quam. Ut cursus pharetra ante, ac placerat arcu gravida aliquet. Sed blandit aliquet dignissim. Quisque vel metus nulla. Nullam at rutrum quam, vitae laoreet sem. Curabitur malesuada orci mauris, vitae suscipit purus vulputate non. Duis condimentum eget lacus nec pretium. Nulla dapibus ante ac venenatis viverra. Sed felis ante, eleifend in ante eu, dignissim fringilla turpis. Nullam elementum malesuada nisl et hendrerit.',
    art: [],
    likedBy: [
      {
        id: '3',
        createdOn: new Date().getTime(),
        name: 'Diana',
        avatar: 'http://i.huffpost.com/gen/1259191/thumbs/o-LYNDA-CARTER-WONDER-WOMAN-570.jpg?6',
      },
      {
        id: '4',
        createdOn: new Date().getTime(),
        name: 'Holtzman',
        avatar: 'http://static2.hypable.com/wp-content/uploads/2016/07/Ghostbusters-Jillian-Holtzman-Kate-McKinnon.jpg',
      },
    ],
  },
  {
    id: '13',
    createdOn: new Date().getTime(),
    createdBy: {
      id: '3',
      createdOn: new Date().getTime(),
      name: 'Diana',
      avatar: 'http://i.huffpost.com/gen/1259191/thumbs/o-LYNDA-CARTER-WONDER-WOMAN-570.jpg?6',
    },
    title: 'Suffering Sappho!',
    description: '',
    art: [
      {
        id: '103',
        createdOn: new Date().getTime(),
        title: 'commodo nisi mi, tempor',
        image: 'https://s-media-cache-ak0.pinimg.com/736x/20/47/62/204762886a94f325a1d347f232e8eff6.jpg',
      },
    ],
    likedBy: [
      {
        id: '1',
        createdOn: new Date().getTime(),
        name: 'Ripley',
        avatar: 'http://content7.flixster.com/photo/14/06/29/14062925_gal.jpg',
      },
    ],
  },
  {
    id: '14',
    createdOn: new Date().getTime(),
    createdBy: {
      id: '4',
      createdOn: new Date().getTime(),
      name: 'Holtzman',
      avatar: 'http://static2.hypable.com/wp-content/uploads/2016/07/Ghostbusters-Jillian-Holtzman-Kate-McKinnon.jpg',
    },
    title: 'Just try saying no to these salty parabolas!',
    description: '',
    art: [],
    likedBy: [],
  },
  {
    id: '15',
    createdOn: new Date().getTime(),
    createdBy: {
      id: '5',
      createdOn: new Date().getTime(),
      name: 'Selena',
      avatar: 'http://img.cinemablend.com/cb/1/8/f/a/b/a/18fabad9330db27316d87626a9aa844ad7fb0d124c1a8964c34b9134545e6352.jpg',
    },
    title: 'I am Catwoman. Hear me roar.',
    description: 'Suspendisse potenti. Integer lacinia dapibus enim, eget semper erat.',
    art: [
      {
        id: '104',
        createdOn: new Date().getTime(),
        title: 'mollis metus blandit eu',
        image: 'http://www.painterartist.com/static/ptr/product_content/painter/2017/feature-slides/10.jpg',
      },
      {
        id: '105',
        createdOn: new Date().getTime(),
        title: 'Vestibulum',
        image: 'https://img0.etsystatic.com/064/1/5261196/il_340x270.757419446_8ueg.jpg',
      },
    ],
    likedBy: [
      {
        id: '1',
        createdOn: new Date().getTime(),
        name: 'Ripley',
        avatar: 'http://content7.flixster.com/photo/14/06/29/14062925_gal.jpg',
      },
    ],
  },
];

const art = [
  {
    id: '101',
    createdOn: new Date().getTime(),
    createdBy: {
      id: '1',
      createdOn: new Date().getTime(),
      name: 'Ripley',
      avatar: 'http://content7.flixster.com/photo/14/06/29/14062925_gal.jpg',
    },
    title: 'Curabitur finibus maximus purus eu viverra',
    description: 'ac vulputate erat, nec sagittis elit',
    image: 'https://s-media-cache-ak0.pinimg.com/736x/f2/c3/9c/f2c39c1651d11f47c5a5f35f205663fa.jpg',
    sketchbooks: [
      {
        id: '11',
        createdOn: new Date().getTime(),
        title: 'I say we take off and nuke it from orbit.',
      },
    ],
    critiques: [],
    likedBy: [
      {
        id: '2',
        createdOn: new Date().getTime(),
        name: 'Sarah',
        avatar: 'https://upload.wikimedia.org/wikipedia/en/8/81/Sarah_Connor_(Linda_Hamilton).jpg',
      },
      {
        id: '5',
        createdOn: new Date().getTime(),
        name: 'Selena',
        avatar: 'http://img.cinemablend.com/cb/1/8/f/a/b/a/18fabad9330db27316d87626a9aa844ad7fb0d124c1a8964c34b9134545e6352.jpg',
      },
    ],
  },
  {
    id: '102',
    createdOn: new Date().getTime(),
    createdBy: {
      id: '1',
      createdOn: new Date().getTime(),
      name: 'Ripley',
      avatar: 'http://content7.flixster.com/photo/14/06/29/14062925_gal.jpg',
    },
    title: 'Aenean',
    description: 'Cras sed fermentum elit. Phasellus condimentum, nulla sed porttitor condimentum, erat felis feugiat erat, sit amet pretium tellus metus id tellus.',
    image: 'https://s-media-cache-ak0.pinimg.com/736x/7c/17/ba/7c17ba3567c1311530b81f5bb84365ef.jpg',
    sketchbooks: [
      {
        id: '11',
        createdOn: new Date().getTime(),
        title: 'I say we take off and nuke it from orbit.',
      },
    ],
    critiques: [{ id: '1005' }],
    likedBy: [
      {
        id: '3',
        createdOn: new Date().getTime(),
        name: 'Diana',
        avatar: 'http://i.huffpost.com/gen/1259191/thumbs/o-LYNDA-CARTER-WONDER-WOMAN-570.jpg?6',
      },
      {
        id: '2',
        createdOn: new Date().getTime(),
        name: 'Sarah',
        avatar: 'https://upload.wikimedia.org/wikipedia/en/8/81/Sarah_Connor_(Linda_Hamilton).jpg',
      },
    ],
  },
  {
    id: '103',
    createdOn: new Date().getTime(),
    createdBy: {
      id: '3',
      createdOn: new Date().getTime(),
      name: 'Diana',
      avatar: 'http://i.huffpost.com/gen/1259191/thumbs/o-LYNDA-CARTER-WONDER-WOMAN-570.jpg?6',
    },
    title: 'commodo nisi mi, tempor',
    description: 'Nulla porttitor bibendum ante non suscipit. Donec vel dui a est feugiat dapibus quis in nisi. Duis hendrerit vel risus quis dignissim. Aenean a erat nisl. Nullam tempus, ligula id pellentesque porta, diam urna sodales odio, at porttitor odio felis id tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam placerat libero quis dui bibendum, a tempor enim tempor. Sed cursus dictum nibh, eget lobortis magna venenatis quis. Aliquam rutrum dapibus metus, eget congue nisl lacinia vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus leo neque, non dictum metus tempor a. Integer sed purus elit.\nCurabitur arcu mi, cursus ut risus et, aliquet scelerisque lacus. Suspendisse enim enim, iaculis at augue ut, dignissim ullamcorper eros. Sed quis sem id libero dictum venenatis. Pellentesque ex urna, lacinia vel dolor eget, porttitor suscipit libero. Aenean nisl dolor, tincidunt nec varius eu, varius quis risus. Nam egestas lacus sed porttitor placerat. Pellentesque scelerisque sollicitudin neque ac blandit. Pellentesque maximus faucibus justo, quis varius massa facilisis id. Aenean non rhoncus metus. Etiam pretium volutpat nibh, quis imperdiet est mollis vel. Pellentesque et pulvinar diam. Donec et tortor pretium, suscipit erat eget, malesuada sapien. Donec a arcu vitae orci congue ornare eu ac massa. Suspendisse aliquet accumsan mi, eget vestibulum erat ullamcorper quis. Etiam scelerisque, tortor a hendrerit auctor, neque arcu viverra tortor, in accumsan nibh quam quis purus.\nEtiam eget vestibulum nulla. Aliquam tincidunt porttitor augue bibendum ultrices. Ut vestibulum turpis mauris, sed malesuada nulla euismod sed. Pellentesque ultrices velit diam, at porta nisl tempus eget. Donec nec eros justo. Praesent vitae porta odio, et viverra dolor. Sed sem lacus, convallis non consectetur non, dictum vel massa. Etiam pharetra mi et laoreet sollicitudin. Phasellus tortor quam, ultricies quis lacus quis, consectetur ullamcorper nibh. Donec congue lectus a facilisis placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras facilisis blandit lectus in lobortis. Morbi urna sem, rhoncus eu arcu id, hendrerit molestie risus. Proin mauris sem, aliquet eu faucibus sed, aliquet vel nisi.\nInterdum et malesuada fames ac ante ipsum primis in faucibus. Duis at ornare odio. Nunc consequat interdum mollis. Vestibulum mollis bibendum tortor, a vulputate justo cursus vitae. In ut velit commodo, rutrum dui quis, lobortis ipsum. Curabitur congue erat non mauris tempus, interdum blandit magna consectetur. Pellentesque lectus dui, malesuada ut massa sed, mollis hendrerit nulla. Duis massa diam, fringilla non viverra vitae, lobortis eu est.',
    image: 'https://s-media-cache-ak0.pinimg.com/736x/20/47/62/204762886a94f325a1d347f232e8eff6.jpg',
    sketchbooks: [
      {
        id: '13',
        createdOn: new Date().getTime(),
        title: 'Suffering Sappho!',
      },
    ],
    critiques: [
      {
        id: '1001',
        createdOn: new Date().getTime(),
        createdBy: {
          id: '1',
          createdOn: new Date().getTime(),
          name: 'Ripley',
          avatar: 'http://content7.flixster.com/photo/14/06/29/14062925_gal.jpg',
        },
        title: '',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae enim eget ipsum vestibulum auctor. Maecenas faucibus mauris at mollis dictum. Nulla vulputate elementum augue, vitae auctor nulla. Phasellus vulputate dolor velit, nec imperdiet ante imperdiet dapibus. Mauris mollis risus tellus, nec mattis risus laoreet consequat. Praesent non commodo elit. Cras posuere faucibus lectus ut finibus. Pellentesque fermentum dignissim lectus, at eleifend lectus posuere nec. Aenean tincidunt pulvinar tortor ut consequat. Proin et aliquam lacus, sed porttitor ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis id nisl eu bibendum. Integer mollis justo quis nulla semper faucibus.\nAliquam efficitur et velit id sollicitudin. Phasellus pellentesque id risus in semper. Etiam egestas sagittis diam eget rutrum. Vivamus gravida nunc iaculis libero blandit, id viverra enim condimentum. Nunc et neque nunc. Fusce ut volutpat turpis. Aenean felis quam, rhoncus vitae fermentum non, gravida in nunc. Vivamus ut lacus eget ex elementum tempus. Aliquam tristique eget odio nec volutpat. Ut vestibulum, purus vel venenatis maximus, neque ipsum iaculis lectus, at efficitur dolor nunc ut dui. Aliquam non arcu quis dui rutrum convallis at vitae augue. Praesent ac condimentum nunc. Nullam vitae turpis sed diam vulputate vestibulum.\nDonec aliquam purus rutrum dictum luctus. Praesent consequat vestibulum neque, eget tempus sapien sagittis quis. Cras nibh quam, tristique sit amet massa sit amet, gravida dictum purus. Nunc placerat elementum est in tincidunt. Proin faucibus arcu sit amet sem dictum ullamcorper. Proin fringilla scelerisque felis, eu sodales massa euismod sed. Vivamus eget sodales enim. Praesent rhoncus, dolor a semper lobortis, velit mauris convallis quam, vel sollicitudin augue metus eu lorem.',
        art: {
          id: '103',
          createdOn: new Date().getTime(),
          title: 'commodo nisi mi, tempor',
          image: 'https://s-media-cache-ak0.pinimg.com/736x/20/47/62/204762886a94f325a1d347f232e8eff6.jpg',
        },
        thankedBy: [
          {
            id: '2',
            createdOn: new Date().getTime(),
            name: 'Sarah',
            avatar: 'https://upload.wikimedia.org/wikipedia/en/8/81/Sarah_Connor_(Linda_Hamilton).jpg',
          },
          {
            id: '3',
            createdOn: new Date().getTime(),
            name: 'Diana',
            avatar: 'http://i.huffpost.com/gen/1259191/thumbs/o-LYNDA-CARTER-WONDER-WOMAN-570.jpg?6',
          },
          {
            id: '5',
            createdOn: new Date().getTime(),
            name: 'Selena',
            avatar: 'http://img.cinemablend.com/cb/1/8/f/a/b/a/18fabad9330db27316d87626a9aa844ad7fb0d124c1a8964c34b9134545e6352.jpg',
          },
        ],
      },
    ],
    likedBy: [
      {
        id: '1',
        createdOn: new Date().getTime(),
        name: 'Ripley',
        avatar: 'http://content7.flixster.com/photo/14/06/29/14062925_gal.jpg',
      },
    ],
  },
  {
    id: '104',
    createdOn: new Date().getTime(),
    createdBy: {
      id: '5',
      createdOn: new Date().getTime(),
      name: 'Selena',
      avatar: 'http://img.cinemablend.com/cb/1/8/f/a/b/a/18fabad9330db27316d87626a9aa844ad7fb0d124c1a8964c34b9134545e6352.jpg',
    },
    title: 'mollis metus blandit eu',
    description: 'Nam nec urna leo. Nulla pulvinar sapien vel lacus dapibus elementum. Vivamus tempor eros ac lacus lobortis malesuada. Quisque a magna sit amet eros placerat ultricies eu at lorem. Sed viverra tortor in cursus posuere. Donec malesuada, mauris non pulvinar ullamcorper, arcu sapien cursus est, ac rutrum leo ante ut urna. Maecenas vel augue eget nunc volutpat tempus ac non mauris. Nunc interdum hendrerit nisi eu iaculis.\nSed a eros lectus. Aliquam sem justo, pretium a accumsan in, convallis id nisl. Praesent malesuada nibh ac diam consectetur, sed aliquet lacus gravida. Nam consectetur, quam eu mollis bibendum, orci orci pharetra nunc, viverra sagittis libero ex id metus. Vestibulum pretium augue vel hendrerit blandit. Fusce bibendum mollis semper. Fusce elementum placerat turpis, vel pulvinar nisi suscipit eget. Pellentesque suscipit nisl sed felis fringilla, eget euismod enim molestie. Aenean molestie vel eros tempor tempus. Praesent et ultrices quam, in consequat risus. Etiam quam arcu, porta venenatis volutpat non, mattis et quam. Fusce nisi nunc, blandit ac dui quis, laoreet porttitor neque. Fusce pellentesque nisi sit amet ipsum convallis, eu consequat ante ornare. Mauris vel ligula ipsum. Donec eget orci eu leo ultrices feugiat sed vel nibh. Aliquam cursus ligula non urna elementum varius eu id est.',
    image: 'http://www.painterartist.com/static/ptr/product_content/painter/2017/feature-slides/10.jpg',
    sketchbooks: [
      {
        id: '15',
        createdOn: new Date().getTime(),
        title: 'I am Catwoman. Hear me roar.',
      },
    ],
    critiques: [{ id: '1004' }],
    likedBy: [],
  },
  {
    id: '105',
    createdOn: new Date().getTime(),
    createdBy: {
      id: '5',
      createdOn: new Date().getTime(),
      name: 'Selena',
      avatar: 'http://img.cinemablend.com/cb/1/8/f/a/b/a/18fabad9330db27316d87626a9aa844ad7fb0d124c1a8964c34b9134545e6352.jpg',
    },
    title: 'Vestibulum',
    description: 'Morbi non sapien semper, condimentum metus in, condimentum massa. Ut egestas pellentesque turpis vitae mollis. Cras egestas enim eget felis porta, at posuere turpis pulvinar. Aliquam nec dapibus quam, a pellentesque orci. Morbi eget sapien id dolor luctus elementum vitae id erat. Pellentesque efficitur ante a neque efficitur pretium. Phasellus suscipit ultrices velit eu iaculis. Pellentesque condimentum orci id orci tristique, sit amet vulputate libero pharetra. Curabitur ullamcorper risus arcu, vitae auctor turpis imperdiet sed.',
    image: 'https://img0.etsystatic.com/064/1/5261196/il_340x270.757419446_8ueg.jpg',
    sketchbooks: [
      {
        id: '15',
        createdOn: new Date().getTime(),
        title: 'I am Catwoman. Hear me roar.',
      },
    ],
    critiques: [{ id: '1002' }, { id: '1003' }],
    likedBy: [
      {
        id: '1',
        createdOn: new Date().getTime(),
        name: 'Ripley',
        avatar: 'http://content7.flixster.com/photo/14/06/29/14062925_gal.jpg',
      },
    ],
  },
];

const crits = [
  {
    id: '1001',
    createdOn: new Date().getTime(),
    createdBy: {
      id: '1',
      createdOn: new Date().getTime(),
      name: 'Ripley',
      avatar: 'http://content7.flixster.com/photo/14/06/29/14062925_gal.jpg',
    },
    title: '',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae enim eget ipsum vestibulum auctor. Maecenas faucibus mauris at mollis dictum. Nulla vulputate elementum augue, vitae auctor nulla. Phasellus vulputate dolor velit, nec imperdiet ante imperdiet dapibus. Mauris mollis risus tellus, nec mattis risus laoreet consequat. Praesent non commodo elit. Cras posuere faucibus lectus ut finibus. Pellentesque fermentum dignissim lectus, at eleifend lectus posuere nec. Aenean tincidunt pulvinar tortor ut consequat. Proin et aliquam lacus, sed porttitor ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis id nisl eu bibendum. Integer mollis justo quis nulla semper faucibus.\nAliquam efficitur et velit id sollicitudin. Phasellus pellentesque id risus in semper. Etiam egestas sagittis diam eget rutrum. Vivamus gravida nunc iaculis libero blandit, id viverra enim condimentum. Nunc et neque nunc. Fusce ut volutpat turpis. Aenean felis quam, rhoncus vitae fermentum non, gravida in nunc. Vivamus ut lacus eget ex elementum tempus. Aliquam tristique eget odio nec volutpat. Ut vestibulum, purus vel venenatis maximus, neque ipsum iaculis lectus, at efficitur dolor nunc ut dui. Aliquam non arcu quis dui rutrum convallis at vitae augue. Praesent ac condimentum nunc. Nullam vitae turpis sed diam vulputate vestibulum.\nDonec aliquam purus rutrum dictum luctus. Praesent consequat vestibulum neque, eget tempus sapien sagittis quis. Cras nibh quam, tristique sit amet massa sit amet, gravida dictum purus. Nunc placerat elementum est in tincidunt. Proin faucibus arcu sit amet sem dictum ullamcorper. Proin fringilla scelerisque felis, eu sodales massa euismod sed. Vivamus eget sodales enim. Praesent rhoncus, dolor a semper lobortis, velit mauris convallis quam, vel sollicitudin augue metus eu lorem.',
    art: {
      id: '103',
      createdOn: new Date().getTime(),
      title: 'commodo nisi mi, tempor',
      image: 'https://s-media-cache-ak0.pinimg.com/736x/20/47/62/204762886a94f325a1d347f232e8eff6.jpg',
    },
    thankedBy: [
      {
        id: '2',
        createdOn: new Date().getTime(),
        name: 'Sarah',
        avatar: 'https://upload.wikimedia.org/wikipedia/en/8/81/Sarah_Connor_(Linda_Hamilton).jpg',
      },
      {
        id: '3',
        createdOn: new Date().getTime(),
        name: 'Diana',
        avatar: 'http://i.huffpost.com/gen/1259191/thumbs/o-LYNDA-CARTER-WONDER-WOMAN-570.jpg?6',
      },
      {
        id: '5',
        createdOn: new Date().getTime(),
        name: 'Selena',
        avatar: 'http://img.cinemablend.com/cb/1/8/f/a/b/a/18fabad9330db27316d87626a9aa844ad7fb0d124c1a8964c34b9134545e6352.jpg',
      },
    ],
  },
  {
    id: '1002',
    createdOn: new Date().getTime(),
    createdBy: {
      id: '1',
      createdOn: new Date().getTime(),
      name: 'Ripley',
      avatar: 'http://content7.flixster.com/photo/14/06/29/14062925_gal.jpg',
    },
    title: '',
    content: 'Aliquam nec eros tincidunt, aliquet ante ac, ornare lacus. Aenean elementum nisl in leo mattis, sed varius massa congue. Nam congue aliquet congue. Cras id cursus nibh, at tempor velit. Curabitur eu luctus elit, efficitur interdum risus. Proin euismod volutpat leo ac fringilla. Suspendisse gravida enim sit amet ipsum pulvinar sodales. Fusce eros nisl, mollis eget sem ac, dignissim venenatis eros. Mauris placerat massa et elit pharetra, ullamcorper tincidunt enim sodales. Phasellus ut erat erat. Mauris non odio est. Morbi finibus fermentum turpis. Integer ultrices malesuada condimentum.',
    art: {
      id: '105',
      createdOn: new Date().getTime(),
      title: 'Vestibulum',
      image: 'https://img0.etsystatic.com/064/1/5261196/il_340x270.757419446_8ueg.jpg',
    },
    thankedBy: [
      {
        id: '5',
        createdOn: new Date().getTime(),
        name: 'Selena',
        avatar: 'http://img.cinemablend.com/cb/1/8/f/a/b/a/18fabad9330db27316d87626a9aa844ad7fb0d124c1a8964c34b9134545e6352.jpg',
      },
      {
        id: '2',
        createdOn: new Date().getTime(),
        name: 'Sarah',
        avatar: 'https://upload.wikimedia.org/wikipedia/en/8/81/Sarah_Connor_(Linda_Hamilton).jpg',
      },
    ],
  },
  {
    id: '1003',
    createdOn: new Date().getTime(),
    createdBy: {
      id: '2',
      createdOn: new Date().getTime(),
      name: 'Sarah',
      avatar: 'https://upload.wikimedia.org/wikipedia/en/8/81/Sarah_Connor_(Linda_Hamilton).jpg',
    },
    title: '',
    content: 'Mauris arcu libero, hendrerit ut ultricies eu, lobortis a ipsum.',
    art: {
      id: '105',
      createdOn: new Date().getTime(),
      title: 'Vestibulum',
      image: 'https://img0.etsystatic.com/064/1/5261196/il_340x270.757419446_8ueg.jpg',
    },
    thankedBy: [],
  },
  {
    id: '1004',
    createdOn: new Date().getTime(),
    createdBy: {
      id: '3',
      createdOn: new Date().getTime(),
      name: 'Diana',
      avatar: 'http://i.huffpost.com/gen/1259191/thumbs/o-LYNDA-CARTER-WONDER-WOMAN-570.jpg?6',
    },
    title: '',
    content: 'Sed volutpat mi lectus, quis condimentum neque hendrerit in. Suspendisse auctor orci at molestie lobortis. Praesent non tincidunt ligula, id imperdiet augue. Curabitur ut nisi nunc. Vestibulum eget aliquet risus. Fusce lectus odio, posuere ac ex a, eleifend accumsan arcu.',
    art: {
      id: '104',
      createdOn: new Date().getTime(),
      title: 'mollis metus blandit eu',
      image: 'http://www.painterartist.com/static/ptr/product_content/painter/2017/feature-slides/10.jpg',
    },
    thankedBy: [
      {
        id: '1',
        createdOn: new Date().getTime(),
        name: 'Ripley',
        avatar: 'http://content7.flixster.com/photo/14/06/29/14062925_gal.jpg',
      },
    ],
  },
  {
    id: '1005',
    createdOn: new Date().getTime(),
    createdBy: {
      id: '3',
      createdOn: new Date().getTime(),
      name: 'Diana',
      avatar: 'http://i.huffpost.com/gen/1259191/thumbs/o-LYNDA-CARTER-WONDER-WOMAN-570.jpg?6',
    },
    title: '',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae enim eget ipsum vestibulum auctor. Maecenas faucibus mauris at mollis dictum. Nulla vulputate elementum augue, vitae auctor nulla. Phasellus vulputate dolor velit, nec imperdiet ante imperdiet dapibus. Mauris mollis risus tellus, nec mattis risus laoreet consequat. Praesent non commodo elit. Cras posuere faucibus lectus ut finibus. Pellentesque fermentum dignissim lectus, at eleifend lectus posuere nec. Aenean tincidunt pulvinar tortor ut consequat. Proin et aliquam lacus, sed porttitor ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis id nisl eu bibendum. Integer mollis justo quis nulla semper faucibus.\nAliquam efficitur et velit id sollicitudin. Phasellus pellentesque id risus in semper. Etiam egestas sagittis diam eget rutrum. Vivamus gravida nunc iaculis libero blandit, id viverra enim condimentum. Nunc et neque nunc. Fusce ut volutpat turpis. Aenean felis quam, rhoncus vitae fermentum non, gravida in nunc. Vivamus ut lacus eget ex elementum tempus. Aliquam tristique eget odio nec volutpat. Ut vestibulum, purus vel venenatis maximus, neque ipsum iaculis lectus, at efficitur dolor nunc ut dui. Aliquam non arcu quis dui rutrum convallis at vitae augue. Praesent ac condimentum nunc. Nullam vitae turpis sed diam vulputate vestibulum.',
    art: {
      id: '102',
      createdOn: new Date().getTime(),
      title: 'Aenean',
      image: 'https://s-media-cache-ak0.pinimg.com/736x/7c/17/ba/7c17ba3567c1311530b81f5bb84365ef.jpg',
    },
    thankedBy: [
      {
        id: '4',
        createdOn: new Date().getTime(),
        name: 'Holtzman',
        avatar: 'http://static2.hypable.com/wp-content/uploads/2016/07/Ghostbusters-Jillian-Holtzman-Kate-McKinnon.jpg',
      },
      {
        id: '2',
        createdOn: new Date().getTime(),
        name: 'Sarah',
        avatar: 'https://upload.wikimedia.org/wikipedia/en/8/81/Sarah_Connor_(Linda_Hamilton).jpg',
      },
      {
        id: '5',
        createdOn: new Date().getTime(),
        name: 'Selena',
        avatar: 'http://img.cinemablend.com/cb/1/8/f/a/b/a/18fabad9330db27316d87626a9aa844ad7fb0d124c1a8964c34b9134545e6352.jpg',
      },
      {
        id: '1',
        createdOn: new Date().getTime(),
        name: 'Ripley',
        avatar: 'http://content7.flixster.com/photo/14/06/29/14062925_gal.jpg',
      },
    ],
  },
];

export { users, sketchbooks, art, crits };
