interface Props {
  title: string;
  subtitle: string;
  img: string;
  bg?: string;
  text?: string;
}

const CarouselCard = ({
  title,
  subtitle,
  img,
  bg = 'bg-white',
  text = '',
}: Props) => (
  <div
    className={`min-w-[320px] max-w-[340px] rounded-3xl p-6 ${bg} ${text} flex-shrink-0 cursor-pointer transition-transform duration-200 will-change-transform hover:scale-105 active:scale-105`}
    tabIndex={0}
    style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      transformOrigin: 'center',
      marginTop: '16px',
      marginBottom: '16px',
    }}
  >
    <div className='mb-4 text-sm font-semibold'>{title}</div>
    <div className='mb-4 text-xl font-bold'>{subtitle}</div>
    <div className='h-96 flex items-center justify-center bg-gray-200 rounded-2xl'>
      {img}
    </div>
  </div>
);

export default CarouselCard;
