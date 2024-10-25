import Image from 'next/image';

const PlayerCard = () => {
    return (
      <div className='relative w-full mx-auto bg-primary-950 h-100 text-white rounded-lg overflow-hidden shadow-lg'>
        <div className="absolute inset-0 opacity-10 w-full z-0">
          <Image
            src="https://s3-alpha-sig.figma.com/img/d01f/216a/0a38b0172fc9629274423c2bc6e2c30d?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K-GGtyYri3~Ls-uO2p-mQCgqR1vSBy2hcw0bnneruQj84AC7eTdf~bbr62C827r3cLUei7GbPfzKIIhlobTVHneV9E3UAU6XLSPS8cTDi9cju9tjmbpA-r1iRRLyTs73YhFCdT2vD~EXdA-SpUaJ642y9A6u2d0CI46A8u1dbdT-Yy68lUfDkAlTPDg47QqPwAVfLS5p~UsJIpDKydcLh4P8RYbTkh27PqvyJY9Z33vZOAYifZB6FNalbp17wzCHwQ9J2KoPHG2z6XNK2-bGxpNGT8rW4oeyQmy5Kyrzq4fbDR-75EvW5BQ0LCvWeDh1pVCZqVz0Ty5Kyu~m4j1s8Q__"
            alt="Stadium background"
            layout="fill"
            objectFit="cover"
            className="object-cover w-full h-full z-0"
            quality={100}
          />
            </div>


            <div className='flex-col p-8 z-10'>
                <div className='flex'>
                    <Image
                        src="https://s3-alpha-sig.figma.com/img/5b84/c530/511a63eaec9fb27581e0c1d8cb213adf?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hEf5lk57FxRISIYnRHHdYnGSoMpm5-dDzs9CbPpT0VtmXNL0E0cOAmBHNH7r2rSziQO4Kf34UvNjkpMYrFK9cnRyjllSECdxD4xJVZDOUp~EpKS1iZbR352UI-HVqcFyoazTciROOdM79jaB~Pmb2VPW0fQcSvxel0IRlucK47rywcmokuGV1dK0dC1n8jBzDS~0P6d3mrT9qxBO15WzmW5sxLQWQ8S3cdlPJ392Va-DguaWxf0ERphPxtoe10qAuCfg3i2PLRbY-bBCMtudN-tuux5eH6InDKUue5DO2bLZ1x-utCYkzwARpElm7zIJVF~81KHMk1ITjJ~kXhGg2Q__"
                        alt='madrid logo'
                        className='z-10'
                        width={70.5}
                        height={53.5}
                    />
                    <div></div>
                </div>
                <div></div>
                <div></div>
            </div>


            <Image
                src="https://s3-alpha-sig.figma.com/img/7405/5069/b19c0b4a681a7cab8a546b902041fe91?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BIVgp-4y5XipLkT2OXBbSqWkCJYRsHq5dhp-IJALXB0UKI~Vx7xqm5IKZhaB1IiDsPHNyuEjJJrAZ3~C9q6rOJ-acdZ9ebSrxtc8tqOFiS9CsF3BANolfkj4ZfmISWxtyxKqj1KWDDdHYUvhR8ndNjEDqZfQKaj8S4~~zKZYDkIfnAcxwaWjM6bpJuAioeY9gpjhFnucVcYNkQCB9yUUgan0wGnz29f0TPP0EnloSE6g-EsO6TzvARThwlCPJVN7x2lcUQKwSkI21-Gmbq12lQYqsjdunKRwWCkXBUw-NEy6RwZu0gocmzPPDRSqZMOZ9PcHHeIpfSR9ZaW~ZPU8-Q__"
                alt="Player picture"
                height={300}
                width={230}
                className="h-full object-cover absolute right-14 top-0 scale-x-[-1]"
                quality={100}
            />
        </div>
    );
}

export default PlayerCard;
