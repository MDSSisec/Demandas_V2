'use client';

import { AppSidebar } from "@/components/app-sidebar";
import { DataTable } from "@/components/data-table";
import { SiteHeader } from "@/components/site-header";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import data from "../dashboard/data.json";
import styles from "./demandas.module.css";

export default function Demandas() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.header}>
              <h1 className={styles.title}>Demandas</h1>
            </div>
            <div className={styles.tableContainer}>
              <div className={styles.tableWrapper}>
                <DataTable 
                  data={data} 
                  showHeaderControls={false}
                  customColumnNames={{
                    header: "Título",
                    type: "Tipo",
                    status: "Status",
                    target: "Meta",
                    limit: "Limite",
                    reviewer: "Responsável"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
