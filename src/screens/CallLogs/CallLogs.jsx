import React, { useState } from "react";
import { 
  Settings, 
  BarChart3, 
  Phone, 
  Database, 
  Bell, 
  User,
  FileText,
  Search,
  Filter,
  Calendar,
  Clock,
  PhoneCall,
  PhoneIncoming,
  PhoneOutgoing,
  MoreVertical,
  Download,
  Eye
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { COLORS } from "../../lib/constants";

export const CallLogs = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");

  // Navigation items data with Lucide icons
  const navItems = [
    { name: "Dashboard", icon: BarChart3, active: false, screen: "dashboard" },
    { name: "Campaigns", icon: Phone, active: false, screen: "campaigns" },
    { name: "Call logs", icon: FileText, active: true, screen: "call-logs" },
    { name: "Knowledge bases", icon: Database, active: false, screen: "knowledge-bases" },
    { name: "Settings", icon: Settings, active: false, screen: "settings" },
  ];

  const handleNavigation = (screen) => {
    if (onNavigate) {
      onNavigate(screen);
    }
  };

  // Mock call logs data
  const callLogs = [
    {
      id: 1,
      phoneNumber: "+1 (555) 123-4567",
      contactName: "John Smith",
      callType: "inbound",
      status: "completed",
      duration: "5:23",
      date: "2024-01-15",
      time: "14:30",
      campaign: "Customer Support",
      notes: "Customer inquiry about product features"
    },
    {
      id: 2,
      phoneNumber: "+1 (555) 987-6543",
      contactName: "Sarah Johnson",
      callType: "outbound",
      status: "completed",
      duration: "3:45",
      date: "2024-01-15",
      time: "15:15",
      campaign: "Sales Outreach",
      notes: "Follow-up call for product demo"
    },
    {
      id: 3,
      phoneNumber: "+1 (555) 456-7890",
      contactName: "Mike Wilson",
      callType: "inbound",
      status: "missed",
      duration: "0:00",
      date: "2024-01-15",
      time: "16:00",
      campaign: "Customer Support",
      notes: "Missed call - no voicemail"
    },
    {
      id: 4,
      phoneNumber: "+1 (555) 321-0987",
      contactName: "Emily Davis",
      callType: "outbound",
      status: "completed",
      duration: "8:12",
      date: "2024-01-14",
      time: "10:30",
      campaign: "Sales Outreach",
      notes: "Product consultation call"
    },
    {
      id: 5,
      phoneNumber: "+1 (555) 654-3210",
      contactName: "David Brown",
      callType: "inbound",
      status: "completed",
      duration: "2:30",
      date: "2024-01-14",
      time: "11:45",
      campaign: "Customer Support",
      notes: "Technical support request"
    }
  ];

  const getCallTypeIcon = (type) => {
    return type === "inbound" ? PhoneIncoming : PhoneOutgoing;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-100";
      case "missed":
        return "text-red-600 bg-red-100";
      case "voicemail":
        return "text-yellow-600 bg-yellow-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const filteredCallLogs = callLogs.filter(log => {
    const matchesSearch = 
      log.phoneNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.contactName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.campaign.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || log.status === statusFilter;
    const matchesDate = dateFilter === "all" || log.date === dateFilter;
    
    return matchesSearch && matchesStatus && matchesDate;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto bg-white shadow-sm">
        {/* Header */}
        <header className="flex items-center justify-between px-4 md:px-8 lg:px-14 py-6 border-b border-gray-100">
          <div className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent font-bold text-2xl md:text-3xl lg:text-4xl font-['Montserrat']"
            style={{ backgroundImage: COLORS.TEXT_GRADIENT_LEFT }}
          >
            Sentiq
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <Bell className="w-6 h-6 md:w-8 md:h-8 text-gray-600 hover:text-purple-600 cursor-pointer transition-colors" />
            <User className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
            <span className="font-bold text-gray-800 text-xs md:text-sm font-['Montserrat'] hidden sm:block">
              Karthick
            </span>
          </div>
        </header>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Sidebar */}
          <aside 
            className="w-full lg:w-80 lg:sticky lg:top-0 lg:h-screen overflow-y-auto"
            style={{ backgroundColor: COLORS.PRIMARY }}
          >
            <nav className="p-4 md:p-6">
              <ul className="space-y-2">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <li key={index} className="flex items-center">
                      <div
                        className={`flex items-center w-full p-3 md:p-4 rounded-lg transition-all duration-200 cursor-pointer hover:bg-white/70 ${
                          item.active ? "bg-white shadow-sm" : ""
                        }`}
                        onClick={() => handleNavigation(item.screen)}
                      >
                        <IconComponent
                          className={`w-5 h-5 mr-3 ${
                            item.active ? "text-[DARK]" : "text-gray-600"
                          }`}
                        />
                        <span
                          className={`font-['Montserrat'] text-gray-800 text-base md:text-lg ${
                            item.active ? "font-bold" : "font-medium"
                          }`}
                        >
                          {item.name}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          {/* Main content area */}
          <main className="flex-1 px-4 md:px-8 lg:px-12 pb-16">
            <h1 className="text-center bg-clip-text text-transparent font-bold text-2xl md:text-3xl lg:text-4xl font-['Montserrat'] mt-6 md:mt-8 mb-8 md:mb-12" style={{ backgroundImage: COLORS.TEXT_GRADIENT_RIGHT }}>
              Call Logs
            </h1>

            {/* Filters and Search */}
            <div className="mb-8 flex flex-col md:flex-row gap-4 md:gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Search by phone number, contact name, or campaign..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 rounded-xl border-2 border-gray-200 font-['Montserrat'] text-gray-600 text-sm md:text-base transition-colors"
                    style={{ 
                      '--tw-ring-color': COLORS.HOVER_BORDER,
                      '--tw-border-opacity': '1'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = COLORS.HOVER_BORDER;
                      e.target.style.boxShadow = `0 0 0 1px ${COLORS.HOVER_BORDER}`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              {/* Status Filter */}
              <div className="w-full md:w-48">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="h-12 rounded-xl border-2 border-gray-200 font-['Montserrat'] text-gray-600 text-sm md:text-base">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="missed">Missed</SelectItem>
                    <SelectItem value="voicemail">Voicemail</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date Filter */}
              <div className="w-full md:w-48">
                <Select value={dateFilter} onValueChange={setDateFilter}>
                  <SelectTrigger className="h-12 rounded-xl border-2 border-gray-200 font-['Montserrat'] text-gray-600 text-sm md:text-base">
                    <SelectValue placeholder="Filter by date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Dates</SelectItem>
                    <SelectItem value="2024-01-15">Today</SelectItem>
                    <SelectItem value="2024-01-14">Yesterday</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Export Button */}
              <Button 
                className="h-12 px-6 rounded-xl font-['Montserrat'] text-white font-medium transition-all duration-200"
                style={{ background: COLORS.BUTTON_GRADIENT_SAVE }}
              >
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>

            {/* Call Logs List */}
            <div className="space-y-4">
              {filteredCallLogs.map((log) => {
                const CallTypeIcon = getCallTypeIcon(log.callType);
                return (
                  <Card key={log.id} className="rounded-xl border-2 border-gray-200 hover:border-purple-300 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100">
                            <CallTypeIcon className="w-6 h-6 text-purple-600" />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="font-bold text-gray-800 text-lg font-['Montserrat']">
                                {log.contactName}
                              </h3>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium font-['Montserrat'] ${getStatusColor(log.status)}`}>
                                {log.status.charAt(0).toUpperCase() + log.status.slice(1)}
                              </span>
                            </div>
                            
                            <div className="flex items-center space-x-4 text-sm text-gray-600 font-['Montserrat']">
                              <span className="flex items-center">
                                <Phone className="w-4 h-4 mr-1" />
                                {log.phoneNumber}
                              </span>
                              <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {log.duration}
                              </span>
                              <span className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {log.date} at {log.time}
                              </span>
                            </div>
                            
                            <div className="mt-2">
                              <span className="text-sm text-gray-500 font-['Montserrat']">
                                Campaign: {log.campaign}
                              </span>
                            </div>
                            
                            {log.notes && (
                              <div className="mt-2">
                                <p className="text-sm text-gray-600 font-['Montserrat']">
                                  {log.notes}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="rounded-lg border-gray-300 hover:border-purple-300 font-['Montserrat']"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="rounded-lg border-gray-300 hover:border-purple-300 font-['Montserrat']"
                          >
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Empty State */}
            {filteredCallLogs.length === 0 && (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 font-['Montserrat'] mb-2">
                  No call logs found
                </h3>
                <p className="text-gray-500 font-['Montserrat']">
                  {searchTerm || statusFilter !== "all" || dateFilter !== "all" 
                    ? "Try adjusting your search or filters" 
                    : "Start making calls to see your call logs here"}
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}; 