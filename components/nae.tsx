import Image from 'next/image'

export const Nae: React.FC = () => (
  <div>
    <h3>タスクはありません</h3>
    <div>
        <Image src="/images/nae.png" width={200} height={150}/>
    </div>
  </div>
)

export default Nae