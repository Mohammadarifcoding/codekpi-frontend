"use client"
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { allStudents } from '@/data/PythonProgram';
import { ChevronLeft, ChevronRight, Search, Users } from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';
import { FaCrown } from "react-icons/fa6";
const PythongS = () => {

  //   const [searchQuery, setSearchQuery] = useState("")
  //  const [filteredData,setFilteredData] = useState([])

  //  useEffect(()=>{
  //   const filtered = allStudents.filter((student) =>
  //     student.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     student.name.toLowerCase().includes(searchQuery.toLowerCase())
  //   ).sort((a,b)=> b.point - a.point);
  //   setFilteredData(filtered);
  //  },[searchQuery])
   
  
  
  //   const handleSearchChange = (e) => {
  //     setSearchQuery(e.target.value)
  //   }
  
  //   // Get point badge color based on ranges
  //   const getPointColor = (point) => {
  //     if (previous < current) return 'bg-green-600'
  //     if (previous > current) return 'bg-red-600'
  //     if (previous === current) return 'bg-green-600'
  //   }

  //   // Get text color based on previous vs current points
  //   const getTextColor = (previous, current) => {
  //     if (previous < current) return 'text-green-600'
  //     if (previous > current) return 'text-red-600'
  //     return ''
  //   }
let lastRank = 0;
let lastPoints = null;
  const sorted = allStudents?.sort((a, b) => b.point - a.point)
  const data = sorted.map((student, idx) => {
   let rank;
  if(idx == 0){
    rank = 1
  }
  else if(sorted[idx].point == sorted[idx-1].point){
    rank = lastRank
  }
  else{
    rank = idx + 1
  }
  lastRank = rank
  lastPoints = student.point
    return {...student, Rank: rank}
  });
    return (
        <main className="container mx-auto pb-10 px-4">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between sm:flex-row flex-col gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">CodeKpi Python Program</h1>
            <p className="text-muted-foreground mt-1">Manage and view student applications</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <Users size={14} />
              <span>{allStudents.length} Applicants</span>
            </Badge>
          </div>
        </div>

        <Card className="w-full  border-gray-100">
          <CardContent>
            <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 px-3">
              <div className="relative flex-1 w-full ">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by ID or name..."
                  className="w-full pl-8"

                />
              </div>

            </div>

            <div className="rounded-md  overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead className="font-semibold">ID</TableHead>
                    <TableHead className="font-semibold">Name</TableHead>
                    <TableHead className="font-semibold text-right">Points</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.length > 0 ? (
                    data.map((student,idx) => (
                      <TableRow 
                        key={idx} 
                        className={student.disqualify ? "bg-red-100" : "hover:bg-slate-50"}
                      >
                        {/* <TableCell className="font-medium">{idx > 9 ? idx + 1:<span><FaCrown className="text-yellow-600"/></span>}</TableCell> */}
                        {/* <TableCell>{student.point == allStudents[idx - 1].student.point   }</TableCell> */}
                        <TableCell>{student.Rank}</TableCell>
                        <TableCell>{student.name}</TableCell>
                        <TableCell className="text-right">
                          {student.disqualify ? (
                            <span className="text-red-600">{student.disqualifyReason}</span>
                          ) : (
                            <div className="flex items-center justify-end gap-2">
                              <span >
                                {student.point}
                              </span>
                              <div className={`w-2 h-2 rounded-full `}></div>
                            </div>
                          )}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} className="h-24 text-center">
                        No students found matching your search.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
    );
};

export default PythongS;