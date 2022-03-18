export const getPost = (count: number) => {
  return new Promise<IPost[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(
        new Array(count).fill(true).map((_, i) => {
          return {
            title: `title ${i}`,
            body: `lorem ipsum sit dolot ${i}`,
            date: new Date(
              +new Date() - Math.floor(Math.random() * 10000000000)
            ),
          };
        })
      );
    }, 200);
  });
};

export interface IPost {
  title: string;
  body: string;
  date: Date;
}

export interface IPostWithUser extends IPost {
  user: string;
}
