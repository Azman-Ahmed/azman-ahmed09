import { DETAILS } from '.././constants/constants';

const Location = () => {

  const keys = Object.keys(DETAILS) as Array<keyof typeof DETAILS>;

  return (
    <div className='flex flex-col space-y-1 pt-6'>
      {keys.map((key) => (
        <div key={key} className='flex items-center justify-between'>
          <span className='text-Snow text-xs font-bold'>{key}</span>
          <span className='text-Snow text-xs font-bold'>
            {DETAILS[key].toString()}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Location;
