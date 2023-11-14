function formatRupiah(int) {
    let rupiah = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(int);
    return rupiah.split(",")[0]; // remove the decimal part
}

export default function MotifCard({ data }) {
    const handleClickCard = () => {
        console.log("clicked");
    };
    return (
        <div
            className="max-w-[180px] h-[250px] p-2 bg-white rounded-xl shadow flex-col justify-start items-start gap-2 inline-flex font-['Inter'] text-sm"
            onClick={handleClickCard}
        >
            <img
                className="rounded-lg w-[160px] min-h-[160px]"
                src="https://via.placeholder.com/218x177"
            />

            <div className="h-full flex flex-col justify-between">
                <div className="text-[#231010] font-normal line-clamp-2 w-full">
                    {data.nama}
                </div>
                <div className="text-[#231010] font-semibold">
                    {formatRupiah(data.harga)}
                </div>
            </div>
        </div>
    );
}
