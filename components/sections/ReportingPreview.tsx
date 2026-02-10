'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Camera,
  CheckSquare,
  Clock,
  AlertTriangle,
  FileText,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Camera,
    title: 'Photo Documentation',
    description: 'Before/after photos for every service with timestamps',
  },
  {
    icon: CheckSquare,
    title: 'Digital Checklists',
    description: 'Task completion tracking with real-time updates',
  },
  {
    icon: Clock,
    title: 'Time Tracking',
    description: 'Full visibility into service hours and scheduling',
  },
  {
    icon: AlertTriangle,
    title: 'Issue Reporting',
    description: 'Instant alerts for maintenance issues or concerns',
  },
  {
    icon: BarChart3,
    title: 'Performance Metrics',
    description: 'KPIs and trends to track service quality over time',
  },
  {
    icon: FileText,
    title: 'Monthly Reports',
    description: 'Executive summaries delivered to your inbox',
  },
];

interface ReportingPreviewProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function ReportingPreview({
  title = 'Transparent Reporting',
  subtitle = 'Real-time visibility into every aspect of your facility management',
  className,
}: ReportingPreviewProps) {
  return (
    <section className={cn('section-padding', className)}>
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content */}
          <div>
                    <span className="inline-flex rounded-full bg-[hsl(var(--primary))]/10 px-3 py-1 text-[13px] font-medium text-[hsl(var(--primary))] mb-6">
                      Dashboard Access Included
                    </span>
            <h2 className="text-[2rem] leading-tight sm:text-[2.5rem] font-display font-semibold text-[hsl(var(--foreground))] tracking-tight">
              {title}
            </h2>
            <p className="mt-5 text-[19px] text-[hsl(var(--foreground))]/70">{subtitle}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[17px] text-[hsl(var(--foreground))]">
                        {feature.title}
                      </h3>
                      <p className="text-[15px] text-[hsl(var(--foreground))]/65 mt-0.5">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl border border-[hsl(var(--foreground))]/[0.06] bg-white overflow-hidden shadow-apple-lg">
              {/* Mock Dashboard Header */}
              <div className="border-b border-[hsl(var(--foreground))]/[0.06] bg-secondary px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="text-[12px] text-[hsl(var(--foreground))]/55">
                    Your Dashboard
                  </div>
                </div>
              </div>

              {/* Mock Dashboard Content */}
              <div className="p-6 space-y-6">
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-2xl bg-secondary p-4">
                    <div className="text-[24px] font-semibold text-[hsl(var(--foreground))]">98%</div>
                    <div className="text-[12px] text-[hsl(var(--foreground))]/55 mt-0.5">
                      Task Completion
                    </div>
                  </div>
                  <div className="rounded-2xl bg-secondary p-4">
                    <div className="text-[24px] font-semibold text-[#28c840]">4.9</div>
                    <div className="text-[12px] text-[hsl(var(--foreground))]/55 mt-0.5">
                      Quality Score
                    </div>
                  </div>
                  <div className="rounded-2xl bg-secondary p-4">
                    <div className="text-[24px] font-semibold text-[hsl(var(--foreground))]">0</div>
                    <div className="text-[12px] text-[hsl(var(--foreground))]/55 mt-0.5">
                      Open Issues
                    </div>
                  </div>
                </div>

                {/* Mock Chart */}
                <div className="rounded-2xl border border-[hsl(var(--foreground))]/[0.06] p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[15px] font-medium text-[hsl(var(--foreground))]">Weekly Activity</span>
                    <span className="text-[12px] text-[hsl(var(--foreground))]/55">
                      Last 7 days
                    </span>
                  </div>
                  <div className="flex items-end justify-between h-20 space-x-2">
                    {[60, 80, 45, 90, 75, 85, 70].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-[hsl(var(--primary))]/25 rounded-t"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                      <span key={i} className="text-[12px] text-[hsl(var(--foreground))]/55">
                        {day}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-2">
                  <span className="text-sm font-medium">Recent Activity</span>
                  {[
                    { time: '2m ago', text: 'Floor cleaning completed - Lobby' },
                    { time: '15m ago', text: 'QA inspection passed - Floor 3' },
                    { time: '1h ago', text: 'Supply restock completed' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-sm py-2 border-b last:border-0"
                    >
                      <span className="text-[13px] text-[hsl(var(--foreground))]/70">{item.text}</span>
                      <span className="text-[12px] text-[hsl(var(--foreground))]/55">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -top-4 -right-4 h-72 w-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-4 -left-4 h-48 w-48 bg-blue-500/5 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
