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
    const [searchQuery, setSearchQuery] = useState("")
   const [filteredData,setFilteredData] = useState([])

   useEffect(()=>{
    const filtered = allStudents.filter((student) =>
      student.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.name.toLowerCase().includes(searchQuery.toLowerCase())
    ).sort((a,b)=> b.point - a.point);
    setFilteredData(filtered);
   },[searchQuery])
   
   console.log(filteredData)
  
  
    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value)
    }
  
    // Get point badge color based on ranges
    const getPointColor = (point) => {
      if (previous < current) return 'bg-green-600'
      if (previous > current) return 'bg-red-600'
      if (previous === current) return 'bg-green-600'
    }

    // Get text color based on previous vs current points
    const getTextColor = (previous, current) => {
      if (previous < current) return 'text-green-600'
      if (previous > current) return 'text-red-600'
      return ''
    }
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
              <span>{filteredData.length} Applicants</span>
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
                  value={searchQuery}
                  onChange={handleSearchChange}
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
                  {filteredData.length > 0 ? (
                    filteredData.map((student,idx) => (
                      <TableRow 
                        key={idx} 
                        className={student.disqualify ? "bg-red-100" : "hover:bg-slate-50"}
                      >
                        <TableCell className="font-medium">{idx > 9 ? idx + 1:<span><FaCrown className="text-yellow-600"/></span>}</TableCell>
                        <TableCell>{student.name}</TableCell>
                        <TableCell className="text-right">
                          {student.disqualify ? (
                            <span className="text-red-600">{student.disqualifyReason}</span>
                          ) : (
                            <div className="flex items-center justify-end gap-2">
                              <span className={getTextColor(student.previousPoint, student.point)}>
                                {student.point}
                              </span>
                              <div className={`w-2 h-2 rounded-full ${getTextColor(student.previousPoint, student.point)}`}></div>
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

            {/* <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-muted-foreground">
                Showing <strong>{filteredData.length > 0 ? startIndex + 1 : 0}</strong> to{" "}
                <strong>{Math.min(endIndex, filteredData.length)}</strong> of{" "}
                <strong>{filteredData.length}</strong> applicants
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1"
                >
                  <ChevronLeft size={16} />
                </Button>
                <div className="flex items-center gap-1 px-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={page === currentPage ? "default" : "outline"}
                      size="sm"
                      className="w-8 h-8 p-0"
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1"
                >
                   <ChevronRight size={16} />
                </Button>
              </div>
            </div> */}
          </CardContent>
        </Card>
      </div>
    </main>
    );
};

export default PythongS;