import { useAsyncValue } from '@remix-run/react';
import { type PhotoListProps } from '~/types/api-data-type';

const DataList = () => {
  const data: PhotoListProps[] = useAsyncValue() as PhotoListProps[];
  return (
    <div className="flex flex-wrap gap-2 px-6">
      {(data || []).map(({ id, title, thumbnailUrl }) => {
        return (
          <div
            className="flex flex-wrap items-center justify-start gap-2 px-4 py-1 border-2 cursor-pointer"
            key={id}
          >
            <img src={`${thumbnailUrl}`} alt={title} className="w-4 h-auto" />
            <span className="text-sm font-thin">{title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default DataList;
