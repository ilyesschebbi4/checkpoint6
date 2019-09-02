
class Humain {
    name = "";
    job = "";
    skills = []

    getJob(x) {
        this.job = x
        alert(this.job)
    }

    learnNewSkill(skill) {
        this.skills.push(skill)

        alert(this.skills)
    }


    forgetSkill(skill) {
        let index = this.skills.indexOf(skill)
        this.skills.splice(index,1)
        alert(this.skills)
    }


    leaveJob(){
        this.job = "jobless"
        alert(this.job)
      }
}

export default Humain ;