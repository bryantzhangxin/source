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
namespace Maticsoft.Web.Report
{
    public partial class Show : Page
    {
        public string strid = "";
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                if (Request.Params["id"] != null && Request.Params["id"].Trim() != "")
                {
                    strid = Request.Params["id"];
                    int ID = (Convert.ToInt32(strid));
                    ShowInfo(ID);
                }
            }
        }

        private void ShowInfo(int ID)
        {
            Maticsoft.BLL.Report bll = new Maticsoft.BLL.Report();
            Maticsoft.Model.Report model = bll.GetModel(ID);
            this.lblID.Text = model.ID.ToString();
            this.lblname.Text = model.name;
            this.lblprojectName.Text = model.projectName;
            this.lbltime.Text = model.time.ToString();
            this.lbltodayWork.Text = model.todayWork;
            this.lblproblem.Text = model.problem;
            this.lbltomorrowWork.Text = model.tomorrowWork;

        }


    }
}
