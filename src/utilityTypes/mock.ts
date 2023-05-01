export const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/carlossroliveira.png',
      name: 'Carlos Oliveira',
      role: 'Programador',
    },
    content: [
      { type: 'paragraph', content: 'Fala Time 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'Carlos Programador' },
    ],
    publishedAt: new Date('2023-04-30 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/claudiocfn.png',
      name: 'Claudio Ribeiro',
      role: 'Programador',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'Claudio Programador' },
    ],
    publishedAt: new Date('2023-04-29 20:00:00'),
  },
]
