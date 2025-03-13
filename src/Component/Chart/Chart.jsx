import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

const data = [
    { month: "Jan", buyers: 40, sellers: 20 },
    { month: "Feb", buyers: 60, sellers: 35 },
    { month: "Mar", buyers: 50, sellers: 30 },
    { month: "Apr", buyers: 70, sellers: 45 },
    { month: "May", buyers: 90, sellers: 60 },
    { month: "Jun", buyers: 80, sellers: 50 },
    { month: "July", buyers: 80, sellers: 50 },

];

export default function BuyersSellersChart() {
    return (
        <div className="chart-container">
            <div style={{ width: "95%", height: 500, marginLeft: "15px", marginBottom:"130px", marginTop:"150px" }} >
                <h2>Monthly Buyers vs Sellers</h2>
                <ResponsiveContainer>
                    <BarChart data={data} >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="buyers" fill="#8884d8" name="Buyers" />
                        <Bar dataKey="sellers" fill="#82ca9d" name="Sellers" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

    );
}
