import getParts from '@/utils/getParts';
import Part from '../Part/Part';

const Parts = async () => {
    const {parts} = await getParts();
    const homeParts = await parts.slice(0, 6);


    return (
        <div className='mt-5'>
            <h1 className='text-primary text-3xl mb-4 font-bold'>Parts</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1'>
                {
                    homeParts.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>
                    )
                }
            </div>
        </div>
    );
};

export default Parts;