import React from 'react';

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('uz-UZ', { style: 'currency', currency: 'UZS', minimumFractionDigits: 0 }).format(amount);
};

const InvoiceTemplate = (data: any) => {
    const { yourCompany, client, invoiceDetails, items, notes, taxRate, subtotal, taxAmount, total } = data;

    return `
    <div class="max-w-4xl mx-auto p-8 bg-white text-gray-800">
        <div class="flex justify-between items-start mb-10">
            <div>
                <h1 class="text-3xl font-bold text-gray-900">${yourCompany.name}</h1>
                <p>${yourCompany.address}</p>
                <p>${yourCompany.phone}</p>
                <p>${yourCompany.email}</p>
            </div>
            <div class="text-right">
                <h2 class="text-4xl font-bold uppercase text-gray-400">Invoys</h2>
                <p class="mt-2">#${invoiceDetails.number}</p>
            </div>
        </div>

        <div class="flex justify-between mb-10">
            <div>
                <h3 class="font-bold text-gray-500 mb-2">MIJOZ:</h3>
                <p class="font-bold">${client.name}</p>
                <p>${client.address}</p>
                <p>${client.phone}</p>
                <p>${client.email}</p>
            </div>
            <div class="text-right">
                <div class="mb-2">
                    <span class="font-bold text-gray-500">Invoys sanasi: </span>
                    <span>${new Date(invoiceDetails.date).toLocaleDateString('uz-UZ')}</span>
                </div>
                <div>
                    <span class="font-bold text-gray-500">To'lov sanasi: </span>
                    <span>${invoiceDetails.dueDate ? new Date(invoiceDetails.dueDate).toLocaleDateString('uz-UZ') : 'N/A'}</span>
                </div>
            </div>
        </div>

        <table class="w-full mb-10">
            <thead class="bg-gray-800 text-white">
                <tr>
                    <th class="text-left p-3">Tavsif</th>
                    <th class="p-3">Soni</th>
                    <th class="text-right p-3">Narxi</th>
                    <th class="text-right p-3">Jami</th>
                </tr>
            </thead>
            <tbody>
                ${items.map((item: any) => `
                    <tr class="border-b">
                        <td class="p-3">${item.description}</td>
                        <td class="text-center p-3">${item.quantity}</td>
                        <td class="text-right p-3">${formatCurrency(item.price)}</td>
                        <td class="text-right p-3">${formatCurrency(item.quantity * item.price)}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>

        <div class="flex justify-end mb-10">
            <div class="w-full md:w-1/2">
                <div class="flex justify-between py-2 border-b">
                    <span class="font-bold">Jami (soliqsiz):</span>
                    <span>${formatCurrency(subtotal)}</span>
                </div>
                <div class="flex justify-between py-2 border-b">
                    <span class="font-bold">Soliq (${taxRate}%):</span>
                    <span>${formatCurrency(taxAmount)}</span>
                </div>
                <div class="flex justify-between py-3 bg-gray-100 px-2 mt-2">
                    <span class="font-bold text-xl">UMUMIY SUMMA:</span>
                    <span class="font-bold text-xl">${formatCurrency(total)}</span>
                </div>
            </div>
        </div>
        
        ${notes ? `
        <div class="mt-10">
            <h4 class="font-bold text-gray-500 mb-2">Izohlar:</h4>
            <p class="text-sm">${notes}</p>
        </div>
        ` : ''}

        <div class="mt-20 text-center text-sm text-gray-500">
            <p>To'lov uchun rahmat! Agar savollaringiz bo'lsa, biz bilan bog'laning.</p>
            <p class="mt-2">${yourCompany.name}</p>
        </div>
        <div class="text-center mt-4 no-print">
            <button onclick="window.print()" class="bg-primary-green text-white px-6 py-2 rounded-md">Chop etish</button>
        </div>
    </div>
    `;
};

export default InvoiceTemplate;
