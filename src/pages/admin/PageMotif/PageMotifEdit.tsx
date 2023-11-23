// import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../../components/layouts/Header";
import Container from "../../../components/layouts/Container";
import { useEffect, useState } from "react";

import api from "../../../config/api";

export default function PageMotif() {
    const { idMotif } = useParams();
    const navigate = useNavigate();
    const [motif, setMotif] = useState();

    const data = {
        idMotif: "AD123",
        idIndustri: "HF356542",
        nama: "Motif akatsuki tanah - 2mx3m",
        harga: 200000,
        desc: "Lorem ipsum dolor sit amet consectetur. Urna justo elementum tortor massa. Vel morbi accumsan sit laoreet massa auctor enim. Sed vestibulum quam tellus morbi magna.",
        varian: [
            {
                id: "AD123",
                image: "ini pake file.bit64", //ambil dari field image1 dari motif variant
                nama: "Motif akatsuki air - 2mx3m"
            },
            {
                id: "AD125",
                image: "ini pake file.bit64", //ambil dari field image1 dari motif variant
                nama: "Motif akatsuki air - 2mx3m"
            }
        ],
        image1: "ini pake file.bit64",
        image2: "ini pake file.bit64",
        image3: "ini pake file.bit64"
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get(`/motif/${idMotif}`);
                setMotif(res.data.data[0]);
                console.log("get", res.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [idMotif]); // Include idIndustri as a dependency if it's used inside the useEffect

    return (
        <>
            <Container center={true}>
                <Header />
                <div className="flex flex-row justify-center items-start gap-4 font-['Inter'] ">
                    <div className="flex flex-row-reverse gap-2 h-fit w-1/2">
                        <img
                            className="aspect-square w-full rounded-xl bg-cover bg-center shadow-primary"
                            src="https://via.placeholder.com/250x250"
                            alt="motif"
                        />
                        <div className="flex flex-col justify-between w-fit gap-2">
                            <img
                                className="aspect-square h-1/2 rounded-xl bg-cover bg-center shadow-primary"
                                src="https://via.placeholder.com/250x250"
                                alt="motif"
                            />
                            <img
                                className="aspect-square h-1/2 rounded-xl bg-cover bg-center shadow-primary"
                                src="https://via.placeholder.com/250x250"
                                alt="motif"
                            />
                        </div>
                    </div>
                    <div className="w-1/2 max-w-[600px] flex-col justify-end items-start gap-4 inline-flex ">
                        <div className="min-w-[520px] h-fit p-4 bg-white rounded-xl shadow-primary flex-col justify-start items-start gap-16 inline-flex">
                            <div className="flex flex-col items-start justify-start gap-4 h-fit">
                                <div className="self-stretch text-3xl font-semibold line-clamp-2">
                                    Batik akatsuki tanah - 2x5 meter
                                </div>
                                <div className="relative h-fit">
                                    <div className="top-0 left-0 w-full text-base font-normal ">
                                        Rp 100.000/meter
                                    </div>
                                    <div className="w-full text-base font-normal ">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Urna justo elementum tortor massa. Vel
                                        morbi accumsan sit laoreet massa auctor
                                        enim. Sed vestibulum quam tellus morbi
                                        magna.
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="top-0 left-0 text-2xl font-semibold ">
                                        Varian
                                    </div>
                                    <div className="inline-flex items-start justify-start gap-2">
                                        <img
                                            className="w-[100px] h-[100px] rounded-xl"
                                            src="https://via.placeholder.com/100x100"
                                            alt="motif"
                                        />
                                        <img
                                            className="w-[100px] h-[100px] opacity-50 rounded-xl"
                                            src="https://via.placeholder.com/100x100"
                                            alt="motif"
                                        />
                                        <img
                                            className="w-[100px] h-[100px] opacity-50 rounded-xl"
                                            src="https://via.placeholder.com/100x100"
                                            alt="motif"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="self-stretch h-[50px] px-2 bg-[#A25B4C] rounded-xl justify-center items-center inline-flex cursor-pointer"
                                onClick={() =>
                                    navigate(`../checkout/${data.idMotif}`)
                                }
                            >
                                <div className="inline-flex flex-col items-center justify-center">
                                    <div className="inline-flex items-center justify-start h-6">
                                        <div className="flex items-center justify-center gap-1">
                                            <div className="text-base font-semibold leading-normal text-center text-white">
                                                Beli Sekarang
                                            </div>
                                            <div className="relative w-5 h-5 origin-top-left rotate-180" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
