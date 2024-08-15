import {Metadata} from "next";
import {Suspense} from "react";
import Table from "@/app/ui/customers/table";
import {fetchFilteredCustomers} from "@/app/lib/data";

export const metadata: Metadata = {
    title: 'Customers',
};

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const customers = await fetchFilteredCustomers(query);
    return (
        <div className="w-full">
            <Suspense key={query + currentPage} fallback={<>Loading..</>}>
                <Table customers={customers} />
            </Suspense>
        </div>
    );
}