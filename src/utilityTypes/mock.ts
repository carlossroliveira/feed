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
          'Será que a inovação acelerada na área de tecnologia está tornando a concorrência mais acirrada entre as empresas? 🚀',
      },
      { type: 'link', content: 'Carlos Programador' },
    ],
    publishedAt: new Date('2023-04-30 10:05:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/claudiocfn.png',
      name: 'Vinícius Ribeiro',
      role: 'Programador',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      {
        type: 'paragraph',
        content:
          'Estamos ficando cada vez mais dependentes da tecnologia, mas será que isso é saudável para nós?',
      },
      { type: 'link', content: 'Claudio Programador' },
    ],
    publishedAt: new Date('2023-04-29 20:00:00'),
  },
]
