using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Text;
using Maticsoft.Common;
using LTP.Accounts.Bus;
namespace Maticsoft.Web.Report
{
    public partial class Modify : Page
    {       

        		protected void Page_Load(object sender, EventArgs e)
		{
			if (!Page.IsPostBack)
			{
				if (Request.Params["id"] != null && Request.Params["id"].Trim() != "")
				{
					int ID=(Convert.ToInt32(Request.Params["id"]));
					ShowInfo(ID);
				}
			}
		}
			
	private void ShowInfo(int ID)
	{
		Maticsoft.BLL.Report bll=new Maticsoft.BLL.Report();
		Maticsoft.Model.Report model=bll.GetModel(ID);
		this.lblID.Text=model.ID.ToString();
		this.txtname.Text=model.name;
		this.txtprojectName.Text=model.projectName;
		this.txttime.Text=model.time.ToString();
		this.txttodayWork.Value=model.todayWork;
        this.txtproblem.Value = model.problem;
        this.txttomorrowWork.Value = model.tomorrowWork;

	}

		public void btnSave_Click(object sender, EventArgs e)
		{
			
			string strErr="";
			if(this.txtname.Text.Trim().Length==0)
			{
				strErr+="name不能为空！\\n";	
			}
			if(this.txtprojectName.Text.Trim().Length==0)
			{
				strErr+="projectName不能为空！\\n";	
			}
			if(!PageValidate.IsDateTime(txttime.Text))
			{
				strErr+="time格式错误！\\n";	
			}
            if (this.txttodayWork.Value.Trim().Length == 0)
			{
				strErr+="todayWork不能为空！\\n";	
			}
            if (this.txtproblem.Value.Trim().Length == 0)
			{
				strErr+="problem不能为空！\\n";	
			}
            if (this.txttomorrowWork.Value.Trim().Length == 0)
			{
				strErr+="tomorrowWork不能为空！\\n";	
			}

			if(strErr!="")
			{
				MessageBox.Show(this,strErr);
				return;
			}
			int ID=int.Parse(this.lblID.Text);
			string name=this.txtname.Text;
			string projectName=this.txtprojectName.Text;
			DateTime time=DateTime.Parse(this.txttime.Text);
            string todayWork = this.txttodayWork.Value;
            string problem = this.txtproblem.Value;
            string tomorrowWork = this.txttomorrowWork.Value;


			Maticsoft.Model.Report model=new Maticsoft.Model.Report();
			model.ID=ID;
			model.name=name;
			model.projectName=projectName;
			model.time=time;
			model.todayWork=todayWork;
			model.problem=problem;
			model.tomorrowWork=tomorrowWork;

			Maticsoft.BLL.Report bll=new Maticsoft.BLL.Report();
			bll.Update(model);
			Maticsoft.Common.MessageBox.ShowAndRedirect(this,"保存成功！","list.aspx");

		}


        public void btnCancle_Click(object sender, EventArgs e)
        {
            Response.Redirect("list.aspx");
        }
    }
}
