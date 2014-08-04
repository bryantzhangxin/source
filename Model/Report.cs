using System;
namespace Maticsoft.Model
{
	/// <summary>
	/// Report:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class Report
	{
		public Report()
		{}
		#region Model
		private int _id;
		private string _name;
		private string _projectname;
		private DateTime? _time;
		private string _todaywork;
		private string _problem;
		private string _tomorrowwork;
		/// <summary>
		/// 
		/// </summary>
		public int ID
		{
			set{ _id=value;}
			get{return _id;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string name
		{
			set{ _name=value;}
			get{return _name;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string projectName
		{
			set{ _projectname=value;}
			get{return _projectname;}
		}
		/// <summary>
		/// 
		/// </summary>
		public DateTime? time
		{
			set{ _time=value;}
			get{return _time;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string todayWork
		{
			set{ _todaywork=value;}
			get{return _todaywork;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string problem
		{
			set{ _problem=value;}
			get{return _problem;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string tomorrowWork
		{
			set{ _tomorrowwork=value;}
			get{return _tomorrowwork;}
		}
		#endregion Model

	}
}

