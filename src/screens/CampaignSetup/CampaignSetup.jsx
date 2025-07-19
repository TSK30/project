import React, { useState } from "react";
import { 
  Settings, 
  BarChart3, 
  Phone, 
  Database, 
  Bell, 
  User,
  Upload,
  Globe,
  FileText,
  Calendar,
  ChevronDown
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Textarea } from "../../components/ui/textarea";
import { COLORS } from "../../lib/constants";

export const CampaignSetup = () => {
  const [selectedCampaignType, setSelectedCampaignType] = useState("inbound");

  // Navigation items data with Lucide icons
  const navItems = [
    { name: "Dashboard", icon: BarChart3, active: false },
    { name: "Campaigns", icon: Phone, active: true },
    { name: "Call logs", icon: FileText, active: false },
    { name: "Knowledge bases", icon: Database, active: false },
    { name: "Settings", icon: Settings, active: false },
  ];

  // Campaign type options
  const campaignTypes = [
    { id: "inbound", label: "Receive an inbound call" },
    { id: "outbound", label: "Make an outbound call" },
  ];

  // Knowledge base upload options
  const uploadOptions = [
    {
      title: "Upload Files",
      description: "PDF, CSV, TXT",
      icon: Upload,
    },
    {
      title: "Web URL",
      description: "Scrape website",
      icon: Globe,
    },
  ];

  // Call list upload options
  const callListOptions = [
    {
      title: "CSV Upload",
      description: "Phone numbers, Names, Tags",
      icon: Upload,
    },
    {
      title: "CRM Mapping",
      description: "Connect your CRM to map & fetch leads",
      icon: Database,
    },
  ];

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
              Campaign Setup
            </h1>

            {/* Campaign Details Section */}
            <section className="mb-8 md:mb-12">
              <h2 className="font-bold text-gray-800 text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8 font-['Montserrat']">
                Campaign Details
              </h2>

              <div className="space-y-6 md:space-y-8">
                {/* Campaign Name */}
                <div className="space-y-3">
                  <Label className="font-bold text-gray-600 text-base md:text-lg font-['Montserrat']">
                    Campaign Name
                  </Label>
                  <Input
                    placeholder="Enter Campaign Name"
                    className="h-12 md:h-16 lg:h-20 rounded-xl border-2 border-gray-200 font-['Montserrat'] text-gray-600 text-sm md:text-base lg:text-lg px-4 md:px-6 py-3 md:py-4 transition-colors"
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

                {/* Campaign Description */}
                <div className="space-y-3">
                  <Label className="font-bold text-gray-600 text-base md:text-lg font-['Montserrat']">
                    Campaign Description
                  </Label>
                  <Textarea
                    placeholder="Describe the purpose and goals of this campaign"
                    className="h-32 md:h-40 lg:h-48 rounded-xl border-2 border-gray-200 font-['Montserrat'] text-gray-600 text-sm md:text-base lg:text-lg px-4 md:px-6 py-3 md:py-4 resize-none transition-colors"
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

                {/* Campaign Type */}
                <div className="space-y-4">
                  <Label className="font-bold text-gray-600 text-base md:text-lg font-['Montserrat']">
                    Campaign Type
                  </Label>
                  <RadioGroup 
                    value={selectedCampaignType} 
                    onValueChange={setSelectedCampaignType}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    {campaignTypes.map((type) => (
                      <div
                        key={type.id}
                        className="flex items-center space-x-4 w-full sm:w-80 lg:w-96 h-16 md:h-20 rounded-xl border-2 border-gray-200 px-4 md:px-6 py-4 md:py-6 hover:border-[#B6ADDF] transition-colors"
                      >
                        <RadioGroupItem
                          value={type.id}
                          id={type.id}
                          className="w-5 h-5 md:w-6 md:h-6 border-2 border-gray-300"
                        />
                        <Label
                          htmlFor={type.id}
                          className="font-bold text-gray-600 text-sm md:text-base lg:text-lg font-['Montserrat'] cursor-pointer"
                        >
                          {type.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Tone of Voice */}
                <div className="space-y-3">
                  <Label className="font-bold text-gray-600 text-base md:text-lg font-['Montserrat']">
                    Tone of Voice
                  </Label>
                  <Select defaultValue="consultative">
                    <SelectTrigger 
                      className="h-12 md:h-16 lg:h-20 rounded-xl border-2 border-gray-200 font-['Montserrat'] text-gray-600 text-sm md:text-base lg:text-lg px-4 md:px-6 transition-colors"
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
                    >
                      <SelectValue placeholder="Select tone" />
                      <ChevronDown className="w-4 h-4 opacity-50" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultative">Consultative sales</SelectItem>
                      <SelectItem value="friendly">Friendly</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Follow-up Strategy */}
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-600 text-lg md:text-xl lg:text-2xl font-['Montserrat']">
                    Follow-up Strategy
                  </h3>

                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <div className="space-y-3 flex-1">
                      <Label className="font-bold text-gray-600 text-base md:text-lg font-['Montserrat']">
                        Maximum attempts
                      </Label>
                      <Select defaultValue="4">
                        <SelectTrigger 
                          className="h-12 md:h-16 lg:h-20 rounded-xl border-2 border-gray-200 font-['Montserrat'] text-gray-600 text-sm md:text-base lg:text-lg px-4 md:px-6 transition-colors"
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
                        >
                          <SelectValue placeholder="Select attempts" />
                          <ChevronDown className="w-4 h-4 opacity-50" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="5">5</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3 flex-1">
                      <Label className="font-bold text-gray-600 text-base md:text-lg font-['Montserrat']">
                        Time Gap (hours)
                      </Label>
                      <Select defaultValue="2">
                        <SelectTrigger 
                          className="h-12 md:h-16 lg:h-20 rounded-xl border-2 border-gray-200 font-['Montserrat'] text-gray-600 text-sm md:text-base lg:text-lg px-4 md:px-6 transition-colors"
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
                        >
                          <SelectValue placeholder="Select time gap" />
                          <ChevronDown className="w-4 h-4 opacity-50" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="8">8</SelectItem>
                          <SelectItem value="24">24</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Knowledge Base Management */}
            <section className="mb-8 md:mb-12">
              <h2 className="font-bold text-gray-600 text-lg md:text-xl lg:text-2xl mb-6 font-['Montserrat']">
                Knowledge Base Management
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8">
                {uploadOptions.map((option, index) => {
                  const IconComponent = option.icon;
                  return (
                    <Card
                      key={index}
                      className="h-20 md:h-24 lg:h-28 rounded-xl border-2 border-dashed border-gray-300 transition-colors cursor-pointer"
                      style={{
                        '--tw-border-opacity': '1'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.borderColor = COLORS.HOVER_BORDER;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                      }}
                    >
                      <CardContent className="flex items-center justify-between p-4 md:p-5 h-full">
                        <div>
                          <h3 className="font-bold text-gray-600 text-sm md:text-base lg:text-lg font-['Montserrat']">
                            {option.title}
                          </h3>
                          <p className="font-normal text-gray-500 text-xs md:text-sm lg:text-base font-['Montserrat']">
                            {option.description}
                          </p>
                        </div>
                        <IconComponent className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 text-[DARK] stroke-[1]" />
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="space-y-3 mb-8">
                <Label className="font-bold text-gray-600 text-base md:text-lg font-['Montserrat']">
                  Custom FAQs & Call Flows
                </Label>
                <Textarea
                  placeholder="Enter custom FAQs, Call scripts or Conversion flows"
                  className="h-48 md:h-64 lg:h-80 rounded-xl border-2 border-gray-200 font-['Montserrat'] text-gray-600 text-sm md:text-base lg:text-lg px-4 md:px-6 py-3 md:py-4 resize-none transition-colors"
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
            </section>

            {/* Call List Upload & Integrations */}
            <section className="mb-8 md:mb-12">
              <h2 className="font-bold text-gray-800 text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8 font-['Montserrat']">
                Call List Upload & Integrations
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 mb-8">
                {callListOptions.map((option, index) => {
                  const IconComponent = option.icon;
                  return (
                    <Card
                      key={index}
                      className="h-24 md:h-28 lg:h-32 rounded-xl border-2 border-dashed border-gray-300 transition-colors cursor-pointer"
                      style={{
                        '--tw-border-opacity': '1'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.borderColor = COLORS.HOVER_BORDER;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                      }}
                    >
                      <CardContent className="flex items-center justify-between p-4 md:p-5 h-full">
                        <div>
                          <h3 className="font-bold text-gray-600 text-sm md:text-base lg:text-lg font-['Montserrat']">
                            {option.title}
                          </h3>
                          <p className="font-normal text-gray-500 text-xs md:text-sm lg:text-base font-['Montserrat']">
                            {option.description}
                          </p>
                        </div>
                        <IconComponent className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 text-[DARK] stroke-[1]" />
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>

            {/* Publish & Launch */}
            <section>
              <h2 className="font-bold text-gray-800 text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 font-['Montserrat']"
              >
                Publish & Launch
              </h2>

              <Tabs defaultValue="test" className="mb-8">
                <TabsList className="w-full h-16 md:h-20 bg-[#B6ADDF] rounded-xl">
                  <TabsTrigger
                    value="test"
                    className="w-1/2 h-12 md:h-16 data-[state=active]:bg-white data-[state=active]:rounded-lg font-bold text-gray-800 text-sm md:text-base lg:text-lg font-['Montserrat']"
                  >
                    Test Campaign
                  </TabsTrigger>
                  <TabsTrigger
                    value="schedule"
                    className="w-1/2 h-12 md:h-16 data-[state=active]:bg-white data-[state=active]:rounded-lg font-bold text-gray-800 text-sm md:text-base lg:text-lg font-['Montserrat']"
                  >
                    Schedule Campaign
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-8 md:mb-12">
                <div className="space-y-3 flex-1">
                  <Label className="font-bold text-gray-600 text-base md:text-lg font-['Montserrat']">
                    Start Date & Time
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-4 md:left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 text-gray-400" />
                    <Select>
                      <SelectTrigger 
                        className="h-12 md:h-16 lg:h-20 rounded-xl border-2 border-gray-200 font-['Montserrat'] text-gray-600 text-sm md:text-base lg:text-lg pl-12 md:pl-16 pr-4 md:pr-8 transition-colors"
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
                      >
                        <SelectValue placeholder="Pick Start date" />
                        <ChevronDown className="w-4 h-4 opacity-50" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="tomorrow">Tomorrow</SelectItem>
                        <SelectItem value="next-week">Next Week</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3 flex-1">
                  <Label className="font-bold text-gray-600 text-base md:text-lg font-['Montserrat']">
                    End Date & Time
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-4 md:left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 text-gray-400" />
                    <Select>
                      <SelectTrigger 
                        className="h-12 md:h-16 lg:h-20 rounded-xl border-2 border-gray-200 font-['Montserrat'] text-gray-600 text-sm md:text-base lg:text-lg pl-12 md:pl-16 pr-4 md:pr-8 transition-colors"
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
                      >
                        <SelectValue placeholder="Pick end date" />
                        <ChevronDown className="w-4 h-4 opacity-50" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tomorrow">Tomorrow</SelectItem>
                        <SelectItem value="next-week">Next Week</SelectItem>
                        <SelectItem value="next-month">Next Month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8">
                <Button
                  variant="outline"
                  className="w-full sm:w-64 md:w-72 h-12 md:h-16 lg:h-18 rounded-full font-bold text-gray-800 text-sm md:text-base lg:text-lg font-['Montserrat'] border-2 border-gray-300 transition-colors hover:border-[#AEA9C5]"
                  style={{ backgroundImage: COLORS.BUTTON_GRADIENT_SAVE }}
                >
                  SAVE AS DRAFT
                </Button>
                <Button className="w-full sm:w-64 md:w-72 h-12 md:h-16 lg:h-18 rounded-full font-bold text-white text-sm md:text-base lg:text-lg font-['Montserrat'] hover:from-purple-600 hover:to-purple-500 transition-all duration-200 shadow-lg hover:shadow-xl"
                style={{ backgroundImage: COLORS.BUTTON_GRADIENT_LAUNCH }}>
                  LAUNCH CAMPAIGN
                </Button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};