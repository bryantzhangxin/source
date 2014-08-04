﻿using System;
using System.Data;
using System.Text;
using System.Data.SqlClient;
using Maticsoft.DBUtility;//Please add references
namespace Maticsoft.DAL
{
	/// <summary>
	/// 数据访问类:Report
	/// </summary>
	public partial class Report
	{
		public Report()
		{}
		#region  BasicMethod



		/// <summary>
		/// 增加一条数据
		/// </summary>
		public int Add(Maticsoft.Model.Report model)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("insert into Report(");
			strSql.Append("name,projectName,time,todayWork,problem,tomorrowWork)");
			strSql.Append(" values (");
			strSql.Append("@name,@projectName,@time,@todayWork,@problem,@tomorrowWork)");
			strSql.Append(";select @@IDENTITY");
			SqlParameter[] parameters = {
					new SqlParameter("@name", SqlDbType.NVarChar,10),
					new SqlParameter("@projectName", SqlDbType.NVarChar,50),
					new SqlParameter("@time", SqlDbType.Date,3),
					new SqlParameter("@todayWork", SqlDbType.NVarChar,300),
					new SqlParameter("@problem", SqlDbType.NVarChar,300),
					new SqlParameter("@tomorrowWork", SqlDbType.NVarChar,300)};
			parameters[0].Value = model.name;
			parameters[1].Value = model.projectName;
			parameters[2].Value = model.time;
			parameters[3].Value = model.todayWork;
			parameters[4].Value = model.problem;
			parameters[5].Value = model.tomorrowWork;

			object obj = DbHelperSQL.GetSingle(strSql.ToString(),parameters);
			if (obj == null)
			{
				return 0;
			}
			else
			{
				return Convert.ToInt32(obj);
			}
		}
		/// <summary>
		/// 更新一条数据
		/// </summary>
		public bool Update(Maticsoft.Model.Report model)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("update Report set ");
			strSql.Append("name=@name,");
			strSql.Append("projectName=@projectName,");
			strSql.Append("time=@time,");
			strSql.Append("todayWork=@todayWork,");
			strSql.Append("problem=@problem,");
			strSql.Append("tomorrowWork=@tomorrowWork");
			strSql.Append(" where ID=@ID");
			SqlParameter[] parameters = {
					new SqlParameter("@name", SqlDbType.NVarChar,10),
					new SqlParameter("@projectName", SqlDbType.NVarChar,50),
					new SqlParameter("@time", SqlDbType.Date,3),
					new SqlParameter("@todayWork", SqlDbType.NVarChar,300),
					new SqlParameter("@problem", SqlDbType.NVarChar,300),
					new SqlParameter("@tomorrowWork", SqlDbType.NVarChar,300),
					new SqlParameter("@ID", SqlDbType.Int,4)};
			parameters[0].Value = model.name;
			parameters[1].Value = model.projectName;
			parameters[2].Value = model.time;
			parameters[3].Value = model.todayWork;
			parameters[4].Value = model.problem;
			parameters[5].Value = model.tomorrowWork;
			parameters[6].Value = model.ID;

			int rows=DbHelperSQL.ExecuteSql(strSql.ToString(),parameters);
			if (rows > 0)
			{
				return true;
			}
			else
			{
				return false;
			}
		}

		/// <summary>
		/// 删除一条数据
		/// </summary>
		public bool Delete(int ID)
		{
			
			StringBuilder strSql=new StringBuilder();
			strSql.Append("delete from Report ");
			strSql.Append(" where ID=@ID");
			SqlParameter[] parameters = {
					new SqlParameter("@ID", SqlDbType.Int,4)
			};
			parameters[0].Value = ID;

			int rows=DbHelperSQL.ExecuteSql(strSql.ToString(),parameters);
			if (rows > 0)
			{
				return true;
			}
			else
			{
				return false;
			}
		}
		/// <summary>
		/// 批量删除数据
		/// </summary>
		public bool DeleteList(string IDlist )
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("delete from Report ");
			strSql.Append(" where ID in ("+IDlist + ")  ");
			int rows=DbHelperSQL.ExecuteSql(strSql.ToString());
			if (rows > 0)
			{
				return true;
			}
			else
			{
				return false;
			}
		}


		/// <summary>
		/// 得到一个对象实体
		/// </summary>
		public Maticsoft.Model.Report GetModel(int ID)
		{
			
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select  top 1 ID,name,projectName,time,todayWork,problem,tomorrowWork from Report ");
			strSql.Append(" where ID=@ID");
			SqlParameter[] parameters = {
					new SqlParameter("@ID", SqlDbType.Int,4)
			};
			parameters[0].Value = ID;

			Maticsoft.Model.Report model=new Maticsoft.Model.Report();
			DataSet ds=DbHelperSQL.Query(strSql.ToString(),parameters);
			if(ds.Tables[0].Rows.Count>0)
			{
				return DataRowToModel(ds.Tables[0].Rows[0]);
			}
			else
			{
				return null;
			}
		}


		/// <summary>
		/// 得到一个对象实体
		/// </summary>
		public Maticsoft.Model.Report DataRowToModel(DataRow row)
		{
			Maticsoft.Model.Report model=new Maticsoft.Model.Report();
			if (row != null)
			{
				if(row["ID"]!=null && row["ID"].ToString()!="")
				{
					model.ID=int.Parse(row["ID"].ToString());
				}
				if(row["name"]!=null)
				{
					model.name=row["name"].ToString();
				}
				if(row["projectName"]!=null)
				{
					model.projectName=row["projectName"].ToString();
				}
				if(row["time"]!=null && row["time"].ToString()!="")
				{
					model.time=DateTime.Parse(row["time"].ToString());
				}
				if(row["todayWork"]!=null)
				{
					model.todayWork=row["todayWork"].ToString();
				}
				if(row["problem"]!=null)
				{
					model.problem=row["problem"].ToString();
				}
				if(row["tomorrowWork"]!=null)
				{
					model.tomorrowWork=row["tomorrowWork"].ToString();
				}
			}
			return model;
		}

		/// <summary>
		/// 获得数据列表
		/// </summary>
		public DataSet GetList(string strWhere)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select ID,name,projectName,time,todayWork,problem,tomorrowWork ");
			strSql.Append(" FROM Report ");
			if(strWhere.Trim()!="")
			{
				strSql.Append(" where "+strWhere);
			}
			return DbHelperSQL.Query(strSql.ToString());
		}

		/// <summary>
		/// 获得前几行数据
		/// </summary>
		public DataSet GetList(int Top,string strWhere,string filedOrder)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select ");
			if(Top>0)
			{
				strSql.Append(" top "+Top.ToString());
			}
			strSql.Append(" ID,name,projectName,time,todayWork,problem,tomorrowWork ");
			strSql.Append(" FROM Report ");
			if(strWhere.Trim()!="")
			{
				strSql.Append(" where "+strWhere);
			}
			strSql.Append(" order by " + filedOrder);
			return DbHelperSQL.Query(strSql.ToString());
		}

		/// <summary>
		/// 获取记录总数
		/// </summary>
		public int GetRecordCount(string strWhere)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select count(1) FROM Report ");
			if(strWhere.Trim()!="")
			{
				strSql.Append(" where "+strWhere);
			}
			object obj = DbHelperSQL.GetSingle(strSql.ToString());
			if (obj == null)
			{
				return 0;
			}
			else
			{
				return Convert.ToInt32(obj);
			}
		}
		/// <summary>
		/// 分页获取数据列表
		/// </summary>
		public DataSet GetListByPage(string strWhere, string orderby, int startIndex, int endIndex)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("SELECT * FROM ( ");
			strSql.Append(" SELECT ROW_NUMBER() OVER (");
			if (!string.IsNullOrEmpty(orderby.Trim()))
			{
				strSql.Append("order by T." + orderby );
			}
			else
			{
				strSql.Append("order by T.ID desc");
			}
			strSql.Append(")AS Row, T.*  from Report T ");
			if (!string.IsNullOrEmpty(strWhere.Trim()))
			{
				strSql.Append(" WHERE " + strWhere);
			}
			strSql.Append(" ) TT");
			strSql.AppendFormat(" WHERE TT.Row between {0} and {1}", startIndex, endIndex);
			return DbHelperSQL.Query(strSql.ToString());
		}

		/*
		/// <summary>
		/// 分页获取数据列表
		/// </summary>
		public DataSet GetList(int PageSize,int PageIndex,string strWhere)
		{
			SqlParameter[] parameters = {
					new SqlParameter("@tblName", SqlDbType.VarChar, 255),
					new SqlParameter("@fldName", SqlDbType.VarChar, 255),
					new SqlParameter("@PageSize", SqlDbType.Int),
					new SqlParameter("@PageIndex", SqlDbType.Int),
					new SqlParameter("@IsReCount", SqlDbType.Bit),
					new SqlParameter("@OrderType", SqlDbType.Bit),
					new SqlParameter("@strWhere", SqlDbType.VarChar,1000),
					};
			parameters[0].Value = "Report";
			parameters[1].Value = "ID";
			parameters[2].Value = PageSize;
			parameters[3].Value = PageIndex;
			parameters[4].Value = 0;
			parameters[5].Value = 0;
			parameters[6].Value = strWhere;	
			return DbHelperSQL.RunProcedure("UP_GetRecordByPage",parameters,"ds");
		}*/

		#endregion  BasicMethod
		#region  ExtensionMethod

		#endregion  ExtensionMethod
	}
}

