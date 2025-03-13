interface ArticleHeaderProps {
    title: string;
    author: string;
    date: string;
    time: string;
    source: string;
  }
  
  const ArticleHeader: React.FC<ArticleHeaderProps> = ({ title, author, date, time, source }) => {
    return (
      <div className="flex flex-col px-10 space-y-1">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-sm text-gray-600">
          <span className="font-medium">{source}</span> {" - "}
          <span>{date}</span>{", "}
          <span>{time}</span>
        </p>
        <p className="text-sm text-gray-500">Oleh {author}</p>
      </div>
    );
  };
  
  export default ArticleHeader;